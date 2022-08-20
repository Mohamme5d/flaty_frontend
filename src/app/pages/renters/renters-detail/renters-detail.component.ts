import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IRenters } from 'src/app/shared/models/renters.model';
import { RentersService } from 'src/app/shared/services/renters.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-renters-detail',
  templateUrl: './renters-detail.component.html',
  styleUrls: ['./renters-detail.component.css']
})
export class RentersDetailComponent implements OnInit {

  model: IRenters
  form: FormGroup
  id : any
  constructor(
    private router:Router,
    private route : ActivatedRoute, 
    private _service: RentersService,
    private fb : FormBuilder
  ) { 

    this.model= {} as IRenters;
    // this.form = this.fb.group({
    //   renterID: "",
    //   name: "",
    //   id: "",
    //   mobile: "",
    //   address: "",
    //   desc: "",
    //   userID:"",
    //   oldBalance: "",
    //   isDeleteable:"",
    // });
  }
  async  ngOnInit() {
    this.route.params.subscribe(async params => { 
      this.id = params.id;
      await this.getByID()
    }) 
  }

 async getByID(){

  var model= await  (await this._service.getByID(this.id)).data[0]

  this.form = this.fb.group({
    renterID: model.renterID,
    name: model.name,
    id: model.id,
    mobile: model.mobile,
    address: model.address,
    desc: model.desc,
    userID: model.userID,
    oldBalance: model.oldBalance,
    isDeleteable:model.isDeleteable,
  });
  }



  async save()
  {
    this.model.renterID= this.form.value.renterID;
    this.model.name= this.form.value.name
    this.model.address= this.form.value.address;
    this.model.id= this.form.value.id
    this.model.mobile= this.form.value.mobile;
    this.model.desc= this.form.value.desc; 
    this.model.oldBalance= this.form.value.oldBalance;
    this.model.isDeleteable= false
  var response=  await this._service.update(this.model);
  
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
