import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { emailValidator } from '../Directives/email-validator.directive';
import { UsersDataService } from '../Shared/users-data.service';

@Component({
  selector: 'user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit {

  constructor(private _userdataservice:UsersDataService) { }
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
  userRegistrationSubmit(){
    const { email: userEmail, password: userPassword } = Object.assign(this.UserRegistrationForm.value)
    this._userdataservice.SignUp(userEmail,userPassword)
   }
}
