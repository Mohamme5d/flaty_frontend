import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
 import { environment } from "src/environments/environment";
import { ToastrService } from "ngx-toastr";
import { IServiceResponse } from "../models/service.model";
import { IApartment } from "../models/apartment.model";
import { lastValueFrom } from "rxjs";
 

@Injectable({
  providedIn: "root",
})
export class CategoryService {
  constructor(
    private _http: HttpClient,
    private toastr: ToastrService,
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
    var response = <IServiceResponse<IApartment[]>>await lastValueFrom(this._http
      .post<IServiceResponse<IApartment[]>>(
        `${environment.siteURL}/category/getall`,
        filter,
        { headers: new HttpHeaders(this.getHeader()) }
      ))
      .then()
      .catch((err) => {
        this.toastr.error(
          "an Error Occure!",
          "error"
        );
      });

       
    if (response.status == 5) {
      this.toastr.error(
        "You are not authorized!",
        "error"
      );
    } else if (response.status != 1) {
      this.toastr.error(response.message, response.title);
    }
    return response;
  }

  async getById(id: string) {
    var response = <IServiceResponse<IApartment[]>>await lastValueFrom(this._http
      .get<IServiceResponse<IApartment[]>>(
        `${environment.siteURL}/category/GetByID/?id=${id}`,
        {
          headers: new HttpHeaders(this.getHeader()),
        }
      ))
      .then()
      .catch((err) => {
        this.toastr.error(
          "an Error Occure!",
          "error"
        );
      });

       
    if (response.status == 5) {
      this.toastr.error(
        "You are not authorized!",
        "error"
      );
    } else if (response.status != 1) {
      this.toastr.error(response.message, response.title);
    }
    return response;
  }

  async create(model: any) {
    var response = <IServiceResponse<IApartment[]>>await lastValueFrom(this._http
      .post<IServiceResponse<IApartment[]>>(
        `${environment.siteURL}/category/create`,
        model,
        {
          headers: new HttpHeaders(this.getHeader()),
        }
      ))
      .then()
      .catch((err) => {
        this.toastr.error(
          "an Error Occure!",
          "error"
        );
      });

       
    if (response.status == 5) {
      this.toastr.error(
        "You are not authorized!",
        "error"
      );
    } else if (response.status != 1) {
      this.toastr.error(response.message, response.title);
    }
    return response;
  }

  async update(model: any) {
    var response = <IServiceResponse<IApartment[]>>await lastValueFrom(this._http
      .put<IServiceResponse<IApartment[]>>(
        `${environment.siteURL}/category/update`,
        model,
        {
          headers: new HttpHeaders(this.getHeader()),
        }
      ))
      .then()
      .catch((err) => {
        this.toastr.error(
          "an Error Occure!",
          "error"
        );
      });

       
    if (response.status == 5) {
      this.toastr.error(
        "You are not authorized!",
        "error"
      );
    } else if (response.status != 1) {
      this.toastr.error(response.message, response.title);
    }
    return response;
  }


  async delete(id: string) {
    var response = <any>await lastValueFrom(this._http
      .delete<IServiceResponse<IApartment[]>>(
        `${environment.siteURL}/category/delete/?id=${id}`,
        {
          headers: new HttpHeaders(this.getHeader()),
        }
      ))
      .then()
      .catch((err) => {
        this.toastr.error(
          "an Error Occure!",
          "error"
        );
      });

       
    if (response.status == 5) {
      this.toastr.error(
        "You are not authorized!",
        "error"
      );
    } else if (response.status != 1) {
      this.toastr.error(response.message, response.title);
    }
    return response;
  }
}
