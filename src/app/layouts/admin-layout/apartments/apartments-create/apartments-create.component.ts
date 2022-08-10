import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IApartment } from 'src/app/shared/models/apartment.model';
import { ApartmentService } from 'src/app/shared/services/apartment.service';

@Component({
  selector: 'app-apartments-create',
  templateUrl: './apartments-create.component.html',
  styleUrls: ['./apartments-create.component.css']
})
export class ApartmentsCreateComponent implements OnInit {

  model: IApartment
  form: FormGroup
  constructor(
    private _service: ApartmentService,
    private fb : FormBuilder
  ) { 

    this.model= {} as IApartment;
    this.form = this.fb.group({
      name: "",
      address: "",
    });
  }

  ngOnInit(): void {
  }


 async save()
  {
    this.model.address= this.form.value.address;
    this.model.name= this.form.value.name
  var response=  await this._service.create(this.model);
  
  if(response.status==1)
     alert("Done");
  else
  {
    alert("error")
  }
  }

}
