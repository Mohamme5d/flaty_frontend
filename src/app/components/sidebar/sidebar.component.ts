import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'ni-tv-2 text-primary', class: '' },
    { path: '/renters/list', title: 'Renters',  icon:'ni-planet text-blue', class: '' },
    { path: '/apartments/list', title: 'Apartments',  icon:'ni-planet text-blue', class: '' },
    { path: '/rent-contract/list', title: 'Rent Contract',  icon:'ni-planet text-blue', class: '' },
    { path: '/rent-payments/list', title: 'Rent payment',  icon:'ni-pin-3 text-orange', class: '' },
    { path: '/bank-deposit/list', title: 'bank deposit',  icon:'ni-single-02 text-yellow', class: '' },
    { path: '/expenses/list', title: 'Expenses',  icon:'ni-bullet-list-67 text-red', class: '' },
    { path: '/monthly_report/list', title:'monthly report',icon:'ni-bullet-list-67 text-red', class:'' },
    { path: '/login', title: 'login',  icon:'ni-key-25 text-info', class: '' },
    { path: '/Register', title: 'Registers',  icon:'ni-circle-08 text-pink', class: '' }
];

  


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}
