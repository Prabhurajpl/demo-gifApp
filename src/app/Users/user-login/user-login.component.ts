import { User } from '../Model/user';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersDataService } from '../Shared/users-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit { 
  
  user! : User;
  error : string ="";
  EMAIL_REGEXP = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  constructor(private _router:Router,private _userdataservice:UsersDataService) { }
  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required, Validators.email, Validators.minLength(1),Validators.pattern(this.EMAIL_REGEXP)]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]), 
  })
  ngOnInit(): void {
   
  }

  Loginsubmit(){
    
   if(this.loginForm.invalid){
    return
   }
   const { email: userEmail, password: userPassword } = Object.assign(this.loginForm.value)
   this._userdataservice.signInUser(userEmail, userPassword)
   .then((resp) => {
    if (resp.user?.emailVerified !== true) {
      window.alert(
        'Please validate your email address. Kindly check your inbox.'
      );
    }
    else{
    console.log(resp);
    this.SetUserData(resp.user);
    this._userdataservice.userAuthentication(true);
    this._userdataservice.loginedUserEmail = resp.user?.email as string;
    this._userdataservice.loginedUserId = resp.user?.uid as string;
    this._router.navigateByUrl('home');
    }
  })
  .catch((error) =>{
    var errorCode = error.code;
    var errorMessage = error.message;
    if (errorCode === 'auth/wrong-password') {
      alert('Invalid password.');
    } else {
      alert('Inavalid Email');
    }
   })
  }
   
  SetUserData(resp: any) {
    let userData: User = {
      uid: resp.uid,
      email: resp.email,
      password:resp.password,
      categories : []
    };
    localStorage.setItem("LoginedUserDetails",JSON.stringify([userData]))
  }


  

}