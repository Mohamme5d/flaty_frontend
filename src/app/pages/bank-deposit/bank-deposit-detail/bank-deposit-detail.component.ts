import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IBankDeposit } from 'src/app/shared/models/bank.deposit.mode';
import { BankDepostService } from 'src/app/shared/services/bank.deposit.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bank-deposit-detail',
  templateUrl: './bank-deposit-detail.component.html',
  styleUrls: ['./bank-deposit-detail.component.css']
})
export class BankDepositDetailComponent implements OnInit {

  model: IBankDeposit
  form: FormGroup
  id : any
  constructor(
    private router:Router,
    private route : ActivatedRoute, 
    private _service: BankDepostService,
    private fb : FormBuilder
  ) { 

    this.model= {} as IBankDeposit;
    // this.form = this.fb.group({
    //   renterID: "",
    //   name: "",
    //   id: "",
    //   mobile: "",
    //   address: "",
    //   desc: "",
    //   userID:"",
    //   oldBalance: "",
    //   isDeleteable:"",
    // });
  }
  async  ngOnInit() {
    this.route.params.subscribe(async params => { 
      this.id = params.id;
      await this.getByID()
    }) 
  }

 async getByID(){

  var model= await  (await this._service.getByID(this.id)).data[0]

  this.form = this.fb.group({
    bankDepositID: model.bankDepositID,
    amount: model.amount,    
    currencyCode:  model.currencyCode,
    exchangeRate:  model.exchangeRate,
    reciptNo: model.reciptNo,
    date: model.date,
    month: model.month,
    year: model.year,
    notes: model.notes,
    createdOn: model.createdOn,
    
    
  });
  }



  async save()
  {
    this.model.bankDepositID= this.form.value.bankDepositID;
    this.model.amount= this.form.value.amount
    this.model.currencyCode= this.form.value.currencyCode;
    this.model.exchangeRate= this.form.value.exchangeRate;
    this.model.reciptNo= this.form.value.reciptNo;
    this.model.date= this.form.value.date; 
    this.model.month= this.form.value.month;
    this.model.year= this.form.value.year;
    this.model.notes= this.form.value.notes;
    this.model.createdOn= this.form.value.createdOn;
    
  var response=  await this._service.update(this.model);
  
  if(response.status==1)
  {
    Swal.fire({      
      icon: 'success',
      title: 'Your New Bank Deopsit info  has been created',
      showConfirmButton: false,
      timer: 1500
    })
    
    this.router.navigate(["/bank-deposit/list"]);

  }

  else
  {
    Swal.fire({
      icon: 'error',
      title: 'Your New Banke Deposit not created',
      showConfirmButton: false,
      timer: 1500
    })
  }
  }


}
