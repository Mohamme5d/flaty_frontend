import { Component, OnInit } from '@angular/core';
import { BankDepositService } from 'src/app/shared/services/bank-deposit.service';


@Component({
  selector: 'app-bank-deposit-create',
  templateUrl: './bank-deposit-create.component.html',
  styleUrls: ['./bank-deposit-create.component.css']
})
export class BankDepositCreateComponent implements OnInit {

  constructor( public bankDepositService:BankDepositService) 
  {

    
  }

  ngOnInit()
   {
    this.bankDepositService.get_Bank_Deposit_info('https://www.breakingbadapi.com/api/')
    .subscribe(
      result => {
        let response:any = result;
        this.bankDepositService = response.bankDepositService
        console.log(result);
      },
      error=> {
        console.log(error);
      }
    );
  }
}
