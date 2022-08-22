import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IRentPayment } from 'src/app/shared/models/rent.payment.model';
import { RentPaymentService } from 'src/app/shared/services/rent.payment.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-rent-payments-detail',
  templateUrl: './rent-payments-detail.component.html',
  styleUrls: ['./rent-payments-detail.component.css']
})
export class RentPaymentsDetailComponent implements OnInit {
  
  
  model: IRentPayment
  
  form: FormGroup
  id : any
  paymentService: any;
  constructor(
   
   
    private router:Router,
    private route : ActivatedRoute, 
    private _service: RentPaymentService,
    private fb : FormBuilder
  ) {}

  async  ngOnInit() {
    this.route.params.subscribe(async params => { 
      this.id = params.id;
      await this.getByID()
    }) 
  }


  async getByID(){

    var model= await  (await this._service.getByID(this.id)).data[0]

    this.form = this.fb.group({
      rentPaymentID: model.rentPaymentID,
      rentContractID:model.rentContractID,    
      amount: model.amount,
      year: model.year,
      month: model.month,
      paymentDate:model.paymentDate,
      createdOn: model.createdOn,
      
    });
  }

  async save() {
    var model = {} as IRentPayment;
    model.rentPaymentID= this.form.value.rentPaymentID;
    model.amount = Number(this.form.value.amount);
    model.paymentDate = this.form.value.paymentDate;
    model.year = Number(this.form.value.year);
    model.month = Number(this.form.value.month);
    model.rentContractID= Number(this.form.value.rentContractID)
    model.createdOn=  new Date() 
    console.log(this.model)
  
 
 
  var response=  await this._service.update(this.model);
   
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
      this.router.navigate(["/rent-payments/list"]);
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