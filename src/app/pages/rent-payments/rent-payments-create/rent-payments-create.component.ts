import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { IRentContract } from "src/app/shared/models/rent.contract.model";
import { IRentPayment } from "src/app/shared/models/rent.payment.model";
import { RentContractServers } from "src/app/shared/services/rent.contract.service";
import { RentPaymentService } from "src/app/shared/services/rent.payment.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-rent-payments-create",
  templateUrl: "./rent-payments-create.component.html",
  styleUrls: ["./rent-payments-create.component.css"],
})
export class RentPaymentsCreateComponent implements OnInit {
  form: FormGroup;
  contractsList: IRentContract[] = [];

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private contractService: RentContractServers,
    private paymentService: RentPaymentService,
  ) {
    this.form = this.fb.group({
      rentContractID: "",
      amount: "",
      paymentDate: "",
      month: new Date().getMonth() + 1,
      year: new Date().getFullYear(),
    });

    this.getLockups();
  }

  async getLockups() {
    this.contractsList = await (await this.contractService.getAll(null)).data;
    this.contractsList = this.contractsList.filter((e) => e.isActive == true);
  }

  ngOnInit(): void {}
  async saveButton() {
    var model = {} as IRentPayment;

    model.amount = Number(this.form.value.amount);
    model.paymentDate = this.form.value.paymentDate;
    model.year = Number(this.form.value.year);
    model.month = Number(this.form.value.month);
    model.rentContractID= Number(this.form.value.rentContractID)
    model.createdOn=  new Date() 
    var response = await this.paymentService.create(model);
   
    console.log(model)
     console.log(response)
    if (response.status == 1) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your New Rent Payment has been created",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Ops... Somthing went wrong!!",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }
}
