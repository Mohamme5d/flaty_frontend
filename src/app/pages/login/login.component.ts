import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
      //email: ["", [Validators.required]],
      //password: ["", [Validators.required]],

       email: ["taha", [Validators.required]],
       password: ["123456", [Validators.required]],
    });
  }

  ngOnInit() {
  }
  ngOnDestroy() {
  }

  login()
  {
    
      this._authService
       .login(this.loginForm.value["email"], this.loginForm.value["password"])
       .subscribe((response) => {
        console.log(response);

         if (response.status == 1) {
           console.log(response);
           localStorage.setItem("user-data", JSON.stringify(response.data));
           this.router.navigate(["/dashboard"]);
         }
         else{
          alert("invalid Username And Password")
          //  this.toastr.error("invalid Username And Password", 
          //  "error");
         }
       });
   }
  

}
