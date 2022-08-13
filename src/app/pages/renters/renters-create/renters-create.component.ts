import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IRenters } from 'src/app/shared/models/renters.model';
import { RentersService } from 'src/app/shared/services/renters.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

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
      renterID: "",
      name: "",
      id: "",
      mobile: "",
      address: "",
      desc: "",
      userID:"",
      oldBalance: "",
      isDeleteable:"",
    });
  }

  ngOnInit(): void {
  }


 async save()
  {
    this.model.renterID= this.form.value.address;
    this.model.name= this.form.value.name
    this.model.address= this.form.value.address;
    this.model.id= this.form.value.name
    this.model.mobile= this.form.value.address;
    this.model.desc= this.form.value.address;
    this.model.userID= this.form.value.name
    this.model.oldBalance= this.form.value.address;
    this.model.isDeleteable= this.form.value.name
  var response=  await this._service.create(this.model);
  
  if(response.status==1)
     alert("Done");
  else
  {
    alert("error")
  }
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
