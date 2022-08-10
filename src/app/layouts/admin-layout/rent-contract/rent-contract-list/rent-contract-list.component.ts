import { Component, OnInit } from '@angular/core';
import { IRentContract } from 'src/app/shared/models/rent.contract.model';
import { RentContractServers } from 'src/app/shared/services/rent.contract.service';

@Component({
  selector: 'app-rent-contract-list',
  templateUrl: './rent-contract-list.component.html',
  styleUrls: ['./rent-contract-list.component.css']
})
export class RentContractListComponent implements OnInit {
  public loading = false;
  list: IRentContract[] = [];
  constructor(
    private _service: RentContractServers

  ) { }

  ngOnInit() {
    this.getList();

  }

 async getList() {
   
    this.list = await (await this._service.getAll({ limit: 100000 })).data;  

  }
}



  


