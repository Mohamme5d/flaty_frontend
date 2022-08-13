import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  constructor(
    private apartmentService: ApartmentService,
    private renterSerice: RentersService, 
    private contractService: RentContractServers, 

    private fb : FormBuilder,
  ) {

    this.getLockups()

    this.form= this.fb.group({
      "renterID": "",
      "amount": 0,
      "apartmentID": "",
      "startDate": "",
      "endDate": "",
    })
   }

  ngOnInit(): void {
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
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })
    }
    else
    {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
       })
    }
  }

}
