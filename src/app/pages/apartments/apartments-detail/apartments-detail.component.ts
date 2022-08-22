import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IApartment } from 'src/app/shared/models/apartment.model';
import { ApartmentService } from 'src/app/shared/services/apartment.service';
import { BankDepostService } from 'src/app/shared/services/bank.deposit.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-apartments-detail',
  templateUrl: './apartments-detail.component.html',
  styleUrls: ['./apartments-detail.component.css']
})
export class ApartmentsDetailComponent implements OnInit {

  model: IApartment
  form: FormGroup
  id : any
  constructor(
    private router:Router,
    private route : ActivatedRoute, 
    private _service: ApartmentService,
    private fb : FormBuilder
  ) { 

    this.model= {} as IApartment;
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
    apartmentID: model.apartmentID,
    name: model.name,
    address:   model.address
        
    
    
    
  });
  }



  async save()
  {
    this.model.apartmentID= this.form.value.apartmentID;
    this.model.name= this.form.value.name
    this.model.address= this.form.value.address;
    
    
  var response=  await this._service.update(this.model);
  
  if(response.status==1)
  {
    Swal.fire({      
      icon: 'success',
      title: 'Your New Apartment info  has been created',
      showConfirmButton: false,
      timer: 1500
    })
    
    this.router.navigate(["/apartments/list"]);

  }

  else
  {
    Swal.fire({
      icon: 'error',
      title: 'Your Aprtment Deposit not created',
      showConfirmButton: false,
      timer: 1500
    })
  }
  }


}
