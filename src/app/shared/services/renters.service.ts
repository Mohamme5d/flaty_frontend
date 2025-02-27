import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
 import { environment } from "src/environments/environment";
//import { ToastrService } from "ngx-toastr";
import { IServiceResponse } from "../models/service.model";
import { lastValueFrom } from "rxjs";
import { IRenters } from "../models/renters.model";
 

@Injectable({
  providedIn: "root",
})
export class RentersService {
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
    var response = <IServiceResponse<IRenters[]>>await lastValueFrom(this._http
      .get<IServiceResponse<IRenters[]>>(
        `${environment.siteURL}/Renter/GetByUserID/1`, 
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

  async getByID(id: any) {
    var response = <IServiceResponse<IRenters[]>>await lastValueFrom(this._http
      .get<IServiceResponse<IRenters[]>>(
        `${environment.siteURL}/Renter/GetByID/`+id, 
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

//   async getById(id: string) {
//     var response = <IServiceResponse<IRenters[]>>await lastValueFrom(this._http
//       .get<IServiceResponse<IRenters[]>>(
//         `${environment.siteURL}/category/GetByID/?id=${id}`,
//         {
//           headers: new HttpHeaders(this.getHeader()),
//         }
//       ))
//       .then()
//       .catch((err) => {
//         this.toastr.error(
//           "an Error Occure!",
//           "error"
//         );
//       });

       
//     if (response.status == 5) {
//       this.toastr.error(
//         "You are not authorized!",
//         "error"
//       );
//     } else if (response.status != 1) {
//       this.toastr.error(response.message, response.title);
//     }
//     return response;
//   }

   async create(model: any) {
     var response = <IServiceResponse<IRenters[]>>await lastValueFrom(this._http
       .post<IServiceResponse<IRenters[]>>(
         `${environment.siteURL}/Renter/Post`,
         model,
         {
           headers: new HttpHeaders(this.getHeader()),
         }
       ))
       .then()
//       .catch((err) => {
//         this.toastr.error(
//           "an Error Occure!",
//           "error"
//         );
//       });

       
    if (response.status == 5) {
//       this.toastr.error(
//         "You are not authorized!",
//         "error"
//       );
     } else if (response.status != 1) {
//       this.toastr.error(response.message, response.title);
     }
     return response;
  }

  async update(model: any) {
    var response = <IServiceResponse<IRenters[]>>await lastValueFrom(this._http
      .put<IServiceResponse<IRenters[]>>(
        `${environment.siteURL}/Renter/Put/`+ model.renterID,
        model,
        {
          headers: new HttpHeaders(this.getHeader()),
        }
      ))
      .then()
//       .catch((err) => {
//         this.toastr.error(
//           "an Error Occure!",
//           "error"
//         );
//       });

      
   if (response.status == 5) {
//       this.toastr.error(
//         "You are not authorized!",
//         "error"
//       );
    } else if (response.status != 1) {
//       this.toastr.error(response.message, response.title);
    }
    return response;
 }


  async delete(id: any) {
    var response = <IServiceResponse<IRenters[]>>await lastValueFrom(this._http
      .delete<IServiceResponse<IRenters[]>>(
        `${environment.siteURL}/Renter/delete/`+id, 
        {
          headers: new HttpHeaders(this.getHeader()),
        }
      ))
      .then()
//       .catch((err) => {
//         this.toastr.error(
//           "an Error Occure!",
//           "error"
//         );
//       });

      
   if (response.status == 5) {
//       this.toastr.error(
//         "You are not authorized!",
//         "error"
//       );
    } else if (response.status != 1) {
//       this.toastr.error(response.message, response.title);
    }
    return response;
 }

//   async update(model: any) {
//     var response = <IServiceResponse<IRenters[]>>await lastValueFrom(this._http
//       .put<IServiceResponse<IRenters[]>>(
//         `${environment.siteURL}/category/update`,
//         model,
//         {
//           headers: new HttpHeaders(this.getHeader()),
//         }
//       ))
//       .then()
//       .catch((err) => {
//         this.toastr.error(
//           "an Error Occure!",
//           "error"
//         );
//       });

       
//     if (response.status == 5) {
//       this.toastr.error(
//         "You are not authorized!",
//         "error"
//       );
//     } else if (response.status != 1) {
//       this.toastr.error(response.message, response.title);
//     }
//     return response;
//   }


//   async delete(id: string) {
//     var response = <any>await lastValueFrom(this._http
//       .delete<IServiceResponse<IRenters[]>>(
//         `${environment.siteURL}/category/delete/?id=${id}`,
//         {
//           headers: new HttpHeaders(this.getHeader()),
//         }
//       ))
//       .then()
//       .catch((err) => {
//         this.toastr.error(
//           "an Error Occure!",
//           "error"
//         );
//       });

       
//     if (response.status == 5) {
//       this.toastr.error(
//         "You are not authorized!",
//         "error"
//       );
//     } else if (response.status != 1) {
//       this.toastr.error(response.message, response.title);
//     }
//     return response;
//   }
}

