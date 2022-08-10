import { Component, OnInit } from '@angular/core';
import { IRenters } from 'src/app/shared/models/renters.model';
import { RentersService } from 'src/app/shared/services/renters.service';

@Component({
  selector: 'app-renters-list',
  templateUrl: './renters-list.component.html',
  styleUrls: ['./renters-list.component.css']
})
export class RentersListComponent implements OnInit {
  public loading = false;
  list: IRenters[] = [];
  constructor(
    private _service: RentersService

  ) { }

  ngOnInit(): void {
    this.getList();

  }

 async getList() {
   
    this.list = await (await this._service.getAll({ limit: 100000 })).data;  

  }

  
}
