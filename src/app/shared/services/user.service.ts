import { HttpClient } from '@angular/common/http';
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

  login(username:string, password: string) {
     
    var body ={"email": username, "password": password}
    return this._http.post<IServiceResponse<IUser>>(`${environment.siteURL}/Login`, body)
  }

  public get currentUserValue() {
    if (typeof localStorage.getItem("user-data") === "string")
      return (JSON.parse(localStorage.getItem("user-data") || "{}")) as IUser
    return; 
  }
  
}