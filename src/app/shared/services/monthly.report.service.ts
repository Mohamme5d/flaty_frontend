import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
 import { environment } from "src/environments/environment";
//import { ToastrService } from "ngx-toastr";
import { IServiceResponse } from "../models/service.model";
import { IApartment } from "../models/apartment.model";
import { lastValueFrom } from "rxjs";
import { IMonthReport } from "../models/month.report.model";
 

@Injectable({
  providedIn: "root",
})
export class MonthlyReportService {
  constructor(
    private _http: HttpClient,
    //private toastr: ToastrService,
   ) {}

  getHeader() {
    let token = JSON.parse(localStorage.getItem("user-data") || "{}").token;
    return {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Origin": "*",
      token: token,
    };
  }

  async getAll(filter: any) {
    var response = <IServiceResponse<IMonthReport[]>>await lastValueFrom(this._http
      .get<IServiceResponse<IMonthReport[]>>(
        `${environment.siteURL}/MonthReport/GetByUserID/0`, 
        { headers: new HttpHeaders(this.getHeader()) }
      ))
      .then()
      .catch((err) => {
        // this.toastr.error(
        //   "an Error Occure!",
        //   "error"
        // );
      });

       console.log(response);

    if (response.status == 5) {
    //   this.toastr.error(
    //     "You are not authorized!",
    //     "error"
    //   );
    } else if (response.status != 1) {
      //this.toastr.error(response.message, response.title);
    }
    return response;
  }
 
}
