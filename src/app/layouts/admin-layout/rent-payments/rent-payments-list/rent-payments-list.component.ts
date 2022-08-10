import { Component, OnInit } from '@angular/core';
import { IRentPayment } from 'src/app/shared/models/rent.payment.model';
import { RentPaymentService } from 'src/app/shared/services/rent.payment.service';

@Component({
  selector: 'app-rent-payments-list',
  templateUrl: './rent-payments-list.component.html',
  styleUrls: ['./rent-payments-list.component.css']
})
export class RentPaymentsListComponent implements OnInit {

  public loading = false;
  list: IRentPayment[] = [];
  constructor(
    private _service: RentPaymentService

  ) { }

  ngOnInit(): void {
    this.getList();

  }

 async getList() {
   
    this.list = await (await this._service.getAll({ limit: 100000000 })).data;  

  }
}

  
