import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IExpenses } from 'src/app/shared/models/expenses.model';
import { ExpensesService } from 'src/app/shared/services/expenses.services';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-expenses-detail',
  templateUrl: './expenses-detail.component.html',
  styleUrls: ['./expenses-detail.component.css']
})
export class ExpensesDetailComponent implements OnInit {

  model: IExpenses
  form: FormGroup
  id : any
  constructor(
    private router:Router,
    private route : ActivatedRoute, 
    private _service: ExpensesService,
    private fb : FormBuilder
  ) { 

    this.model= {} as IExpenses;
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
    apratmentExpenseID: model.apratmentExpenseID,
    amount: model.amount,
    dueDate: model.dueDate,
    month: model.month,
    year: model.year,
    reason: model.reason,
    apartmentID: model.apartmentID,
    apartmentName: model.apartmentName,
    userID: model.userID,
    isClosed: model.isClosed,
   
  });
}

async save()
{
  this.model.apratmentExpenseID= this.form.value.apratmentExpenseID;
  this.model.amount= this.form.value.amount;
  this.model.dueDate= this.form.value.dueDate;
  this.model.month= this.form.value.month;
  this.model.year= this.form.value.year;
  this.model.reason= this.form.value.reason;
  this.model.apartmentID= this.form.value.apartmentID;
  this.model.apartmentName= this.form.value.apartmentName;
  
  this.model.isClosed= this.form.value.isClosed;
  var response = await this._service.create(this.model);
 

if(response.status==1)
   {
    Swal.fire({
    
      position: 'top-end',
      icon: 'success',
      title: 'Your New Apartment Expensess info has been created',
      showConfirmButton: false,
      timer: 1500
    }
    
  
  )
  this.router.navigate(["/expenses/list"]);
   }
else
{
  Swal.fire({
    
    position: 'top-end',
    icon: 'error',
    title: 'Your New Apartment Expensess info has NOT created',
    showConfirmButton: false,
    timer: 1500
  }

)
}
}

}
