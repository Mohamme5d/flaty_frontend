import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { firstValueFrom, lastValueFrom } from 'rxjs';
import { IServiceResponse } from 'src/app/shared/models/service.model';
import { IUser } from 'src/app/shared/models/user.model';
//import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  public loginForm: FormGroup;

  constructor(
    private router: Router, 
   // private toastr: ToastrService,
    private _fb: FormBuilder,
    private _authService: AuthService
  ) {

    this.loginForm = this._fb.group({
      email: ["", [Validators.required]],
      password: ["", [Validators.required]], 
    });
  }

  ngOnInit() {
  }
  ngOnDestroy() {
  }

 async login()
  {
   
  
     var response=  await lastValueFrom(this._authService
       .login(this.loginForm.value.email, this.loginForm.value.password))
      
          if (response.status == 1) {
            console.log(JSON.stringify(response.data[0]))
            localStorage.setItem("user-data", JSON.stringify(response.data[0]));
           this.router.navigate(["/dashboard"]);
         }
         else{
          alert("invalid Username And Password")
          //  this.toastr.error("invalid Username And Password", 
          //  "error");
         }
        
   }
  

}
