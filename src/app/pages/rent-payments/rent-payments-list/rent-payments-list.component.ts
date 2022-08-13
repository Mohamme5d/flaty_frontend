import { Component, OnInit } from '@angular/core';
import { IRentPayment } from 'src/app/shared/models/rent.payment.model';
import { RentPaymentService } from 'src/app/shared/services/rent.payment.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-rent-payments-list',
  templateUrl: './rent-payments-list.component.html',
  styleUrls: ['./rent-payments-list.component.css']
})
export class RentPaymentsListComponent implements OnInit {

  public loading = false;
  list: IRentPayment[] = [];
  constructor(private router:Router,
    private _service: RentPaymentService

  ) { }

  ngOnInit(): void {
    this.getList();

  }

 async getList() {
   
    this.list = await (await this._service.getAll({ limit: 100000000 })).data;  

  }

  CreatButton() {
    Swal.fire({
      title: 'Do You Want To Add New Rent Payment List?',
      icon: 'question',
      iconHtml: '؟',
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
      cancelButtonColor: 'red',
      showCancelButton: true,
      showCloseButton: true
    }).then((result)=>{
      if (result.value) {
       this.router.navigate(["/rent-payments/create"]);

        
      }
    }
    )   
  }

  
}

  
