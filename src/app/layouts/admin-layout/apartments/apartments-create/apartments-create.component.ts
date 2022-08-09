import { Component, OnInit } from '@angular/core';
import { ApartmentService } from 'src/app/shared/services/apartment.service';

@Component({
  selector: 'app-apartments-create',
  templateUrl: './apartments-create.component.html',
  styleUrls: ['./apartments-create.component.css']
})
export class ApartmentsCreateComponent implements OnInit {

  constructor(
    private _service: ApartmentService

  ) { }

  ngOnInit(): void {
  }

}
