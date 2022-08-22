import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IApartment } from 'src/app/shared/models/apartment.model';
import { IRentContract } from 'src/app/shared/models/rent.contract.model';
import { IRenters } from 'src/app/shared/models/renters.model';
import { ApartmentService } from 'src/app/shared/services/apartment.service';
import { ExpensesService } from 'src/app/shared/services/expenses.services';
import { RentContractServers } from 'src/app/shared/services/rent.contract.service';
import { RentersService } from 'src/app/shared/services/renters.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-rent-contract-detail',
  templateUrl: './rent-contract-detail.component.html',
  styleUrls: ['./rent-contract-detail.component.css']
})
export class RentContractDetailComponent implements OnInit {

  model: IRentContract
  
  form: FormGroup
  id : any
  constructor(
   
   
    private router:Router,
    private route : ActivatedRoute, 
    private _service: RentContractServers,
    private fb : FormBuilder
  ) { 
    

    this.model= {} as IRentContract;
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
    rentContractID:model.rentContractID,

    apartmentID: model.apartmentID,
    renterID: model.renterID,
    amount: model.amount,
    startDate: model.startDate,
    endDate: model.endDate,
    
    
    
   
  });
}


async save()
{
  this.model.rentContractID=this.form.value.rentContractID;
  this.model.apartmentID= this.form.value.apartmentID;
  this.model.renterID= this.form.value.renterID;
  this.model.amount= this.form.value.amount;
  this.model.startDate= this.form.value.startDate;
  this.model.endDate= this.form.value.endDate;
  console.log(this.model)
  
 
 
  var response=  await this._service.update(this.model);
 

if(response.status==1)
   {
    Swal.fire({
    
      position: 'top-end',
      icon: 'success',
      title: 'Your New Rent Contract info has been updated',
      showConfirmButton: false,
      timer: 1500
    }
    
  
  )
  this.router.navigate(["/rent-contract/list"]);
   }
else
{
  Swal.fire({
    
    position: 'top-end',
    icon: 'error',
    title: 'Your New Rent Contract info has NOT updateed',
    showConfirmButton: false,
    timer: 1500
  }

)
}
}



}
