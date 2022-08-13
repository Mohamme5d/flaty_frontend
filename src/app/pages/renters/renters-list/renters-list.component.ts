import { Component, OnInit } from '@angular/core';
import { IRenters } from 'src/app/shared/models/renters.model';
import { RentersService } from 'src/app/shared/services/renters.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-renters-list',
  templateUrl: './renters-list.component.html',
  styleUrls: ['./renters-list.component.css']
})
export class RentersListComponent implements OnInit {
  public loading = false;
  list: IRenters[] = [];
  constructor(private router: Router,
    private _service: RentersService

  ) { }

  ngOnInit(): void {
    this.getList();

  }

 async getList() {
   
    this.list = await (await this._service.getAll({ limit: 100000 })).data;  

  }
  CreatButton() {
    Swal.fire({
      title: 'Do You Want To Add New Renters List?',
      icon: 'question',
      iconHtml: '؟',
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
      cancelButtonColor: 'red',
      showCancelButton: true,
      showCloseButton: true
    }).then((result)=>{
      if (result.value) {
       this.router.navigate(["/renters/create"]);

        
      }
    }
    )

    
  }

  
}
