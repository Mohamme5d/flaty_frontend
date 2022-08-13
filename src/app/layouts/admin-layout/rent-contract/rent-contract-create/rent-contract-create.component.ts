import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-rent-contract-create',
  templateUrl: './rent-contract-create.component.html',
  styleUrls: ['./rent-contract-create.component.css']
})
export class RentContractCreateComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  saveButton(){
    Swal.fire({
      
      position: 'top-end',
      icon: 'success',
      title: 'Your New Rent Contract List has been created',
      showConfirmButton: false,
      timer: 1500
    }
  
  )}
  


}
