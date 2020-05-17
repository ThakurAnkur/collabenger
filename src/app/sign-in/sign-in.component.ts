import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { GlobalService } from "../services/global.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private globalService: GlobalService, private authService: AuthenticationService, private router: Router) { }
  phoneNumber: string;
  userDetails: any;
  loginStatus: string = "Click to login.";

  ngOnInit() {

  }
  onSignInClick(signInForm) {
    console.log("Sign in: ", this.phoneNumber)
    if (this.phoneNumber == "" || this.phoneNumber == undefined) {
      this.loginStatus = "Addd a number";
      return;
    }
    this.authService.getUser(this.phoneNumber).subscribe(
      (results: any) => {
        console.log("User Logged in :", results);
        this.loginStatus = "Success";
        this.globalService.userDetail = results[0] || results;
        this.router.navigate(['home']);
      },
      (error) => {
        console.error(error);
        this.loginStatus = "Failure";
      }
    );
  }
}
