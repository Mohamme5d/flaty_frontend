import { Component, OnInit } from '@angular/core';
import {  } from 'src/app/shared/models/rent.contract.model';
import {  } from 'src/app/shared/services/rent.contract.service';
import { Router } from "@angular/router";
import Swal from 'sweetalert2';


@Component({
  selector: 'app-monthly-report-list',
  templateUrl: './monthly-report-list.component.html',
  styleUrls: ['./monthly-report-list.component.css']
})
export class MonthlyReportListComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
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

} }