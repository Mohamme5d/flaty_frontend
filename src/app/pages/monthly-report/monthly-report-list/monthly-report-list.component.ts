import { Component, OnInit } from '@angular/core';
import { IMonthReport } from 'src/app/shared/models/month.report.model';
import { MonthlyReportService } from 'src/app/shared/services/monthly.report.service';

import {
  formatNumber
 }
  from '@angular/common';

@Component({
  selector: 'app-monthly-report-list',
  templateUrl: './monthly-report-list.component.html',
  styleUrls: ['./monthly-report-list.component.css']
})
export class MonthlyReportListComponent implements OnInit {

  list: IMonthReport[]=[]
  constructor(
    private monthReportSerice: MonthlyReportService
  ) { }

  ngOnInit(): void {
    this.getList()
  }

async getList()
{
  this.list= await (await this.monthReportSerice.getAll(null)).data
}

parseNumber(num?: number) {

  if(num!= null)
  return formatNumber(num, "en-GB", "2.1-1");
  return 0;
}

}
