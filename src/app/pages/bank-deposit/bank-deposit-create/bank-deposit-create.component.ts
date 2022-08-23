import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,ReactiveFormsModule, Validators } from '@angular/forms';
import { IBankDeposit } from 'src/app/shared/models/bank.deposit.mode';
import { BankDepostService } from 'src/app/shared/services/bank.deposit.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';



@Component({
  selector: 'app-bank-deposit-create',
  templateUrl: './bank-deposit-create.component.html',
  styleUrls: ['./bank-deposit-create.component.css']
})
export class BankDepositCreateComponent implements OnInit {

  model: IBankDeposit
  form: FormGroup
  constructor(
    private router:Router,
    private _service: BankDepostService,
    private fb : FormBuilder
  ) { 

    this.model= {} as IBankDeposit;
    this.form = this.fb.group({
     // bankDepositID: new FormControl("", [ Validators.required, Validators.minLength(4), Validators.maxLength(50)]),
      amount: new FormControl("", [ Validators.required, Validators.minLength(1), Validators.maxLength(50)]),
      reciptNo: new FormControl("", [ Validators.required, Validators.minLength(1), Validators.maxLength(50)]),
      date: new FormControl("", [ Validators.required, Validators.minLength(1), Validators.maxLength(50)]),
      month: new FormControl("", [ Validators.required, Validators.minLength(1), Validators.maxLength(50)]),
      notes:"" ,
      year: new FormControl("", [ Validators.required, Validators.minLength(4), Validators.maxLength(50)]),
      exchangeRate: new FormControl("", [ Validators.required, Validators.minLength(4), Validators.maxLength(50)]),
      currencyCode:new FormControl("", [ Validators.required, Validators.minLength(4), Validators.maxLength(50)]),



      
    });
  }

  ngOnInit(): void {
  }


 async save()
  {
  //  if(this.form.valid){

    
   // this.model.bankDepositID= this.form.value.bankDepositID;
    this.model.amount= this.form.value.amount
    this.model.currencyCode= this.form.value.currencyCode;
    this.model.exchangeRate= this.form.value.exchangeRate
    this.model.reciptNo= this.form.value.reciptNo;
    this.model.date= this.form.value.date
    this.model.month= this.form.value.month;
    this.model.year= this.form.value.year
    this.model.notes= this.form.value.notes;
    this.model.createdOn= new Date()
   // this.model.userID= this.form.value.userID;
   // this.model.isClosed= this.form.value.isClosed;
    console.log(this.model)

    
  var response=  await this._service.create(this.model);
  
  if(response.status==1)
  
  {
    Swal.fire({
      
      position: 'top-end',
      icon: 'success',
      title: 'Your New Bank Deposit List has been created',
      showConfirmButton: false,
      timer: 1500
    }
  
  )}
  
  else
  {
    Swal.fire({
      
      position: 'top-end',
      icon: 'error',
      title: 'Your New Bank Deposit  has NOT created',
      showConfirmButton: false,
      timer: 1500
    })
  }
//}
  }
  
  
  
  

}
