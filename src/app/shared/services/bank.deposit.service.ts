import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
 import { environment } from "src/environments/environment";
//import { ToastrService } from "ngx-toastr";
import { IServiceResponse } from "../models/service.model";
import { lastValueFrom } from "rxjs";
import { IBankDeposit } from "../models/bank.deposit.mode";
 
@Injectable({
  providedIn: "root",
})
export class BankDepostService {
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
    var response = <IServiceResponse<IBankDeposit[]>>await lastValueFrom(this._http
      .get<IServiceResponse<IBankDeposit[]>>(
        `${environment.siteURL}/BankDeposit/GetByUserID/0`, 
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
    var response = <IServiceResponse<IBankDeposit[]>>await lastValueFrom(this._http
      .get<IServiceResponse<IBankDeposit[]>>(
        `${environment.siteURL}/BankDeposit/GetByID/`+id, 
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
//     var response = <IServiceResponse<IBankDeposit[]>>await lastValueFrom(this._http
//       .get<IServiceResponse<IBankDeposit[]>>(
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
     var response = <IServiceResponse<IBankDeposit[]>>await lastValueFrom(this._http
       .post<IServiceResponse<IBankDeposit[]>>(
         `${environment.siteURL}/BankDeposit/Post`,
         model,
         {
           headers: new HttpHeaders(this.getHeader()),
         }
       ))
       .then()
       .catch((err) => {
         //this.toastr.error(
           //"an Error Occure!",
           //"error"
        // );
       });

       
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
    var response = <IServiceResponse<IBankDeposit[]>>await lastValueFrom(this._http
      .put<IServiceResponse<IBankDeposit[]>>(
        `${environment.siteURL}/BankDeposit/Put/`+ model.bankDepositID,
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

   async delete(id: number) {
    var response = <IServiceResponse<IBankDeposit[]>>await lastValueFrom(this._http
      .delete<IServiceResponse<IBankDeposit[]>>(
        `${environment.siteURL}/BankDeposit/delete/`+id, 
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
//     var response = <IServiceResponse<IBankDeposit[]>>await lastValueFrom(this._http
//       .put<IServiceResponse<IBankDeposit[]>>(
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

//Delete(id:number)
//{
  //return this._http.delete<any>("http://flatyapi.geekyemeni.com/api/BankDeposit/Delete/0"+ id);

//}

//Update(data:any,id:number)
//{
  //return this._http.put<any>("http://flatyapi.geekyemeni.com/api/BankDeposit/Put/0"+ id,data);

//}
  
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
