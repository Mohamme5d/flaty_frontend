import { Component, OnInit } from '@angular/core';
import { IBankDeposit } from 'src/app/shared/models/bank.deposit.mode';
import { BankDepostService } from 'src/app/shared/services/bank.deposit.service';

@Component({
  selector: 'app-bank-deposit-list',
  templateUrl: './bank-deposit-list.component.html',
  styleUrls: ['./bank-deposit-list.component.css']
})
export class BankDepositListComponent implements OnInit {


  public loading = false;
  list: IBankDeposit[] = [];
  constructor(
    private _service: BankDepostService

  ) { }

  ngOnInit(): void {
    this.getList();

  }

 async getList() {
   
    this.list = await (await this._service.getAll({ limit: 100000 })).data;  

  }
  
   
   

  
  
}

  
  