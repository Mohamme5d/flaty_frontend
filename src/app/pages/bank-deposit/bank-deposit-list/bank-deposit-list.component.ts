import { Component, OnInit } from '@angular/core';
import { IBankDeposit } from 'src/app/shared/models/bank.deposit.mode';
import { BankDepostService } from 'src/app/shared/services/bank.deposit.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bank-deposit-list',
  templateUrl: './bank-deposit-list.component.html',
  styleUrls: ['./bank-deposit-list.component.css']
})
export class BankDepositListComponent implements OnInit {


  public loading = false;
  list: IBankDeposit[] = [];
  constructor(private router:Router,
    private _service: BankDepostService

  ) { }

  ngOnInit(): void {
    this.getList();

  }

 async getList() {
   
    this.list = await (await this._service.getAll({ limit: 100000 })).data;  

  }

  CreatButton() {
    Swal.fire({
      title: 'Do You Want To Add New List Bank Deposit?',
      icon: 'question',
      iconHtml: '؟',
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
      cancelButtonColor: 'red',
      showCancelButton: true,
      showCloseButton: true
    }).then((result)=>{
      if (result.value) {
       this.router.navigate(["/bank-deposit/create"]);

        
      }
    }
    )

    
  }
  async delete(id) {
    Swal.fire({
      title: 'Do you want to delete the renter?',
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
          title: 'Your Bank Deposit info  has been deleted',
          showConfirmButton: false,
          timer: 1500
        })
       await this.getList()

       }
       else
       {
        Swal.fire({      
          icon: 'error',
          title: 'Your  Bank Deposit info  has not  been created!',
          showConfirmButton: false,
          timer: 1500
        })
       }
        
      }
    }
    )

    
  }
   
   

  
  
}

  
  