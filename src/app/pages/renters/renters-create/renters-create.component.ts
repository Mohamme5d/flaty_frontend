import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IRenters } from 'src/app/shared/models/renters.model';
import { RentersService } from 'src/app/shared/services/renters.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';

@Component({
  selector: 'app-renters-create',
  templateUrl: './renters-create.component.html',
  styleUrls: ['./renters-create.component.css']
})
export class RentersCreateComponent implements OnInit {

  model: IRenters
  form: FormGroup
  
  
  constructor(
    private router:Router,
    private _service: RentersService,
    private fb : FormBuilder
  ) { 

    this.model= {} as IRenters;
    this.form = this.fb.group({
   
      name: new FormControl("", [ Validators.required, Validators.minLength(4), Validators.maxLength(50)]),
      id: new FormControl("", [ Validators.required, Validators.minLength(4), Validators.maxLength(50)]),
      mobile: new FormControl("", [ Validators.required, Validators.minLength(4), Validators.maxLength(50)]),
      address: new FormControl("", [ Validators.required, Validators.minLength(4), Validators.maxLength(50)]),
      desc:new FormControl(""),
      oldBalance: new FormControl("", [ Validators.required, Validators.minLength(4), Validators.maxLength(50)]),
      
    });
  }

  ngOnInit(): void {
  }


 async save()
  {     
    if(this.form.valid)
    {
    this.model.renterID= this.form.value.renterID;
    this.model.name= this.form.value.name
    this.model.address= this.form.value.address;
    this.model.id= this.form.value.id
    this.model.mobile= this.form.value.mobile;
    this.model.desc= this.form.value.desc; 
    this.model.oldBalance= this.form.value.oldBalance;
    this.model.isDeleteable= false
  var response=  await this._service.create(this.model);
  
  if(response.status==1)
  {
    Swal.fire({      
      icon: 'success',
      title: 'Your New Renter info  has been created',
      showConfirmButton: false,
      timer: 1500
    }) 
    this.router.navigate(["/renters/list"]); 
  } 
  else
  {
    Swal.fire({
      icon: 'error',
      title: 'Your New Renter not created',
      showConfirmButton: false,
      timer: 1500
    })
  }
  }
}


  
  

}
