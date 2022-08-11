import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { IApartment } from 'src/app/shared/models/apartment.model';
import { ApartmentService } from 'src/app/shared/services/apartment.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apartments-list',
  templateUrl: './apartments-list.component.html',
  styleUrls: ['./apartments-list.component.css']
})
export class ApartmentsListComponent implements OnInit {
  public loading = false;
  list: IApartment[] = [];
  constructor(private router: Router,
    private _service: ApartmentService

  ) { }

  ngOnInit(): void {
    this.getList();

  }

 async getList() {
   
    this.list = await (await this._service.getAll({ limit: 100000 })).data;  

  }

  CreatButton() {
    Swal.fire({
      title: 'Do You Want To Add New Aprtment',
      icon: 'question',
      iconHtml: '؟',
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
      cancelButtonColor: 'red',
      showCancelButton: true,
      showCloseButton: true
    }).then((result)=>{
      if (result.value) {
        this.router.navigate(["/apartments/create"]);

        
      }
    }
    )

    
  }
}

