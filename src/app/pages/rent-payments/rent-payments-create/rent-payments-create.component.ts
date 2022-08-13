import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-rent-payments-create',
  templateUrl: './rent-payments-create.component.html',
  styleUrls: ['./rent-payments-create.component.css']
})
export class RentPaymentsCreateComponent implements OnInit {

  constructor(
    private router:Router,
  ) { }

  ngOnInit(): void {
  }
  saveButton(){
    Swal.fire({
      
      position: 'top-end',
      icon: 'success',
      title: 'Your New Rent Payment List has been created',
      showConfirmButton: false,
      timer: 1500
    }
  
  )}
  

}
