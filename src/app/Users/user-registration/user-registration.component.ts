import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { emailValidator } from '../Directives/email-validator.directive';
import { UsersDataService } from '../Shared/users-data.service';

@Component({
  selector: 'user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit {

  constructor(private _router: Router, private _userdataservice: UsersDataService) { }
  UserRegistrationForm = new FormGroup({
    email: new FormControl('', [
      Validators.required, Validators.email, Validators.minLength(1),
      emailValidator()]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  })
  ngOnInit(): void {
  }
  userRegistrationSubmit() {
    if(this.UserRegistrationForm.invalid){
      return
    }
    const { email: userEmail, password: userPassword } = Object.assign(this.UserRegistrationForm.value)
    this._userdataservice.SignUp(userEmail, userPassword).then((resp) => {
      alert("Verify your email address to finish registeration.. ")
      this._router.navigateByUrl('login');
      this._userdataservice.SendVerificationMail();
    }).catch((error) => {
      console.log(error);
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode === 'auth/email-already-in-use') {
        alert('The email address is already in use by another account');
      }
    })

  }



}
