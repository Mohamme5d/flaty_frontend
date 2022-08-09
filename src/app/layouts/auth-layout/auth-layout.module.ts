import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthLayoutRoutes } from './auth-layout.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LoginComponent } from '../../pages/login/login.component';
import { RegisterComponent } from '../../pages/register/register.component';

import { ClipboardModule } from 'ngx-clipboard';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthLayoutRoutes),
    FormsModule,
    NgbModule,
    ClipboardModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    
    
  ]
})
export class AuthLayoutModule { }
