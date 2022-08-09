import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';

@Component({
  selector: 'app-apartments-list',
  templateUrl: './apartments-list.component.html',
  styleUrls: ['./apartments-list.component.css']
})
export class ApartmentsListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   
  
  }


  testAlert()
  {
    Swal.fire({
      title: 'Do you want to create Apartment',
      icon: 'question',
      iconHtml: '؟',
      confirmButtonText: 'Yes',
    
      cancelButtonText: 'No',
      cancelButtonColor: 'red',
      showCancelButton: true,
      showCloseButton: true
      
    })
  }
}

