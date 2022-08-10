import { Component, OnInit } from '@angular/core';
import { IExpenses } from 'src/app/shared/models/expenses.model';
import { ExpensesService } from 'src/app/shared/services/expenses.services';

@Component({
  selector: 'app-expenses-list',
  templateUrl: './expenses-list.component.html',
  styleUrls: ['./expenses-list.component.css']
})
export class ExpensesListComponent implements OnInit {

  public loading = false;
  list: IExpenses[] = [];
  constructor(
    private _service: ExpensesService

  ) { }

  ngOnInit(): void {
    this.getList();

  }

 async getList() {
   
    this.list = await (await this._service.getAll({ limit: 100000000 })).data;  

  }

}
