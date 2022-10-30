import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IApartment } from 'src/app/shared/models/apartment.model';
import { ApartmentService } from 'src/app/shared/services/apartment.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-apartments-create',
  templateUrl: './apartments-create.component.html',
  styleUrls: ['./apartments-create.component.css']
})
export class ApartmentsCreateComponent implements OnInit {

  model: IApartment
  form:  FormGroup
  submitted = false
  
  //valid= new FormGroup({
   // name:new FormControl("", [ Validators.required, Validators.minLength(4), Validators.maxLength(50)]),
    //address: new FormControl("", [ Validators.required, Validators.minLength(4), Validators.maxLength(0)]),
  //});
  //get name(){return this.valid.get(this.name)}
  //get address(){return this.valid.get(this.address)}
  
  
  
  constructor(
    private _service: ApartmentService,
    private fb : FormBuilder
  ) { 

    
  }

  ngOnInit() {
    this.model= {} as IApartment;
    this.form = this.fb.group({
      name:new FormControl("", [ Validators.required, Validators.minLength(4), Validators.maxLength(50)]),
      address: new FormControl("", [ Validators.required, Validators.minLength(4), Validators.maxLength(50)]),
    });
    
   }
   
   onSubmit() {
    this.submitted = true
    if(this.form.invalid)
    {
      return
    }
    alert(('done'))
    
  }
 

 async save()
  {
    this.model.address= this.form.value.address;
    this.model.name= this.form.value.name
  var response=  await this._service.create(this.model);
  
  if(response.status==1)
  {
    Swal.fire({
      
      position: 'top-end',
      icon: 'success',
      title: 'Your Aprtment has been created',
      showConfirmButton: false,
      timer: 1500
    }
  
  )}
  
  else
  {
    Swal.fire({
      
      position: 'top-end',
      icon: 'error',
      title: 'Your New Bank Deposit info has NOT created',
      showConfirmButton: false,
      timer: 1500
    })
  }
}

}