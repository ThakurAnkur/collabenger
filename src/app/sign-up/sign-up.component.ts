import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private authService: AuthenticationService) { }
  firstName: string;
  lastName: string;
  phoneNumber: string;
  userDetails:any;
  signUpStatus: string = "Click to Sign up.";

  ngOnInit() {

  }
  onSignUpClick (signInForm){
    console.log("Sign Up: ",this.phoneNumber)
    this.authService.createUser(this.firstName, this.lastName,this.phoneNumber).subscribe(
      (results: any) => {
        console.log("User Sign up in :",results);
        this.signUpStatus = "Success";
     },
      (error) => {
        console.error(error);
        this.signUpStatus = "Failure";
      }
    );
  }
}
