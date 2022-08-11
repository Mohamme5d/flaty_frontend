import { Component, OnInit } from '@angular/core';
import { IRentContract } from 'src/app/shared/models/rent.contract.model';
import { RentContractServers } from 'src/app/shared/services/rent.contract.service';
import { Router } from "@angular/router";
import Swal from 'sweetalert2';
@Component({
  selector: 'app-rent-contract-list',
  templateUrl: './rent-contract-list.component.html',
  styleUrls: ['./rent-contract-list.component.css']
})
export class RentContractListComponent implements OnInit {
  public loading = false;
  list: IRentContract[] = [];
  constructor(private router: Router,
    private _service: RentContractServers

  ) { }

  ngOnInit() {
    this.getList();

  }

 async getList() {
   
    this.list = await (await this._service.getAll({ limit: 100000 })).data;  

  }

  CreatButton() {
    Swal.fire({
      title: 'Do You Want To Add New Rent Contract List?',
      icon: 'question',
      iconHtml: '؟',
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
      cancelButtonColor: 'red',
      showCancelButton: true,
      showCloseButton: true
    }).then((result)=>{
      if (result.value) {
       this.router.navigate(["/rent-contract/create"]);

        
      }
    }
    )

    
  }
}



  


