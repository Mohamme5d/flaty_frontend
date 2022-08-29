import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IApartment } from 'src/app/shared/models/apartment.model';
import { IRentContract } from 'src/app/shared/models/rent.contract.model';
import { IRenters } from 'src/app/shared/models/renters.model';
import { ApartmentService } from 'src/app/shared/services/apartment.service';
import { RentContractServers } from 'src/app/shared/services/rent.contract.service';
import { RentersService } from 'src/app/shared/services/renters.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-rent-contract-create',
  templateUrl: './rent-contract-create.component.html',
  styleUrls: ['./rent-contract-create.component.css']
})
export class RentContractCreateComponent implements OnInit {

  renterList: IRenters[]=[]
  apartmentList: IApartment[]=[];
  form: FormGroup
  submitted = false
  constructor(
    private apartmentService: ApartmentService,
    private renterSerice: RentersService, 
    private contractService: RentContractServers, 

    private fb : FormBuilder,
  ) {

    this.getLockups()

    
   }

  ngOnInit(){
    this.form= this.fb.group({
      renterID: new FormControl("", [ Validators.required, Validators.minLength(1), Validators.maxLength(50)]),
      amount: new FormControl("", [ Validators.required]),
      apartmentID: new FormControl("", [ Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
      startDate: new FormControl("", [ Validators.required, Validators.minLength(1), Validators.maxLength(50)]),
      endDate: new FormControl("", [ Validators.required, Validators.minLength(1), Validators.maxLength(50)]),
    })
  }
  onSubmit() {
    this.submitted = true
    if(this.form.invalid)
    {
      return
    }
    alert(('done'))
    
  }
  async getLockups()
  {
      this.renterList= await((await this.renterSerice.getAll(null)).data)
    this.apartmentList= await((await this.apartmentService.getAll(null)).data)
  }

 async save(){
    var model= {} as IRentContract
    model.amount= Number(this.form.value.amount)
    model.startDate= (this.form.value.startDate)
    model.endDate= (this.form.value.endDate)
    model.renterID= Number(this.form.value.renterID)
    model.apartmentID= Number(this.form.value.apartmentID)

    var response= await this.contractService.create(model);

    console.log(response)
    if(response.status==1)
  
  {
    Swal.fire({
      
      position: 'top-end',
      icon: 'success',
      title: 'Your New Rent Contract has been created',
      showConfirmButton: false,
      timer: 1500
    }
  
  )}
  
  else
  {
    Swal.fire({
      
      position: 'top-end',
      icon: 'error',
      title: 'Your New Rent Contract  has NOT created',
      showConfirmButton: false,
      timer: 1500
    })
  }
//}
  }
}
