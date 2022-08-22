import { Component, OnInit } from '@angular/core';
import { IExpenses } from 'src/app/shared/models/expenses.model';
import { ExpensesService } from 'src/app/shared/services/expenses.services';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-expenses-list',
  templateUrl: './expenses-list.component.html',
  styleUrls: ['./expenses-list.component.css']
})
export class ExpensesListComponent implements OnInit {

  public loading = false;
  list: IExpenses[] = [];
  constructor(private router: Router,
    private _service: ExpensesService

  ) { }

  ngOnInit(): void {
    this.getList();

  }

 async getList() {
   
    this.list = await (await this._service.getAll({ limit: 100000000 })).data;  

  }
  CreatButton() {
    Swal.fire({
      title: 'Do You Want To Add New Expenses List ?',
      icon: 'question',
      iconHtml: '؟',
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
      cancelButtonColor: 'red',
      showCancelButton: true,
      showCloseButton: true
    }).then((result)=>{
      if (result.value) {
       this.router.navigate(["/expenses/create"]);

        
      }
    }
    )

    
  }
  async delete(id) {
    Swal.fire({
      title: 'Do you want to delete this Apratment Expense?',
      icon: 'question',
      iconHtml: '؟',
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
      cancelButtonColor: 'red',
      showCancelButton: true,
      showCloseButton: true
    }).then(async (result)=>{
      if (result.value) {
      
       var response= await this._service.delete(id)
       if(response.status==1)
       {
        Swal.fire({      
          icon: 'success',
          title: 'Your Apratment Expense info  has been deleted',
          showConfirmButton: false,
          timer: 1500
        })
       await this.getList()

       }
       else
       {
        Swal.fire({      
          icon: 'error',
          title: 'Your  Apratment Expense info  has not  been created!',
          showConfirmButton: false,
          timer: 1500
        })
       }
        
      }
    }
    )

    
  }

}
