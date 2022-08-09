import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BankDepositService {

  constructor(public httpClient: HttpClient,) 
  { }
    get_Bank_Deposit_info(url:string)
    {
      return this.httpClient.get('https://www.breakingbadapi.com/api/')
      .pipe(
      map(res =>res)
      );
    }
  }



