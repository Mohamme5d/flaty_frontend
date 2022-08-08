import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IUser } from '../models/user.model';
import { IServiceResponse } from '../models/service.model';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private _http: HttpClient
  ) { }


  getHeader() {
    // let token = JSON.parse(localStorage.getItem("user-data") || "{}").token;
    return {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Origin": "*"
      // token: token,
    };
  }


  login(username:string, password: string) {
    var body ={"email": username, "password": password}

    return  this._http.post<IServiceResponse<IUser[]>>(`${environment.siteURL}/login/login`, body,{
      headers: new HttpHeaders(this.getHeader()), 

    })
  }


  async  login2(username:string, password: string) {
     
    var body ={"email": username, "password": password}
    
    var response = <IServiceResponse<IUser[]>>await this._http
    .post<IServiceResponse<IUser[]>>(
      `${environment.siteURL}/login/login`,
      body,
      { headers: new HttpHeaders(this.getHeader()) }
    )
    .toPromise()
    .then()
    .catch((err) => {
      // this.toastr.error(
      //   this.translate.instant("errorOccure"),
      //   this.translate.instant("error")
      // );
    });

  if (response.status == 5) {
    // this.toastr.error(
    //   this.translate.instant("yourNotAuth"),
    //   this.translate.instant("error")
    // );
  } else if (response.status != 1) {
   // this.toastr.error(response.message, response.title);
  }
  return response;

  }

  public get currentUserValue() {
    if (typeof localStorage.getItem("user-data") === "string")
      return (JSON.parse(localStorage.getItem("user-data") || "{}")) as IUser
    return; 
  }
  
}