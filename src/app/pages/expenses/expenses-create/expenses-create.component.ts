import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IExpenses } from 'src/app/shared/models/expenses.model';
import { ExpensesService } from 'src/app/shared/services/expenses.services';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-expenses-create',
  templateUrl: './expenses-create.component.html',
  styleUrls: ['./expenses-create.component.css']
})
export class ExpensesCreateComponent implements OnInit {
  model: IExpenses
  form: FormGroup
  constructor(
    private router: Router,
    private _service: ExpensesService,
    private fb : FormBuilder
  ) { 

    this.model= {} as IExpenses;
    this.form = this.fb.group({
      apratmentExpenseID: "",
      amount: "",
      dueDate: "",
      month: "",
      year: "",
      reason: "",
      apartmentID: "",
      apartmentName: "",
      userID: "",
      isClosed: "",
     
    });
  }

  ngOnInit(): void {
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
    this.model.userID= this.form.value.userID;
    this.model.isClosed= this.form.value.isClosed;
    var response = await this._service.create(this.model);
    console.log(this.model)
   
  
  if(response.status==1)
     {
      Swal.fire({
      
        position: 'top-end',
        icon: 'success',
        title: 'Your New Apratment Expense info has been created',
        showConfirmButton: false,
        timer: 1500
      }
    
    )
     }
  else
  {
    Swal.fire({
      
      position: 'top-end',
      icon: 'error',
      title: 'Your New Apratment Expense info has NOT created',
      showConfirmButton: false,
      timer: 1500
    }
  
  )
  }
  }
  

}
