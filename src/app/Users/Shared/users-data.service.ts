import { Observable } from 'rxjs';
import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router'
import { User } from '../Model/user';

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {

  isLoginedUser: boolean = false;
  user!: User;
  loginedUserEmail: string = "";
  loginedUserId: string = "";
  actionCodeSettings = { };
  constructor(public _angularFirestore: AngularFirestore,
    public _angularFireAuth: AngularFireAuth,
    public _router: Router,
    public _ngZone: NgZone) { }

  SignUp(email: string, password: string) {
    return this._angularFireAuth.createUserWithEmailAndPassword(email, password)
  }

  signInUser(email: string, password: string) {
    return this._angularFireAuth.signInWithEmailAndPassword(email, password);

  }

  userAuthentication(loginstatus: boolean) {
    return (loginstatus) ? this.isLoginedUser = true : this.isLoginedUser = false;
  }

  isLoggedIn() {
    return !!localStorage.getItem('LoginedUserDetails');
  }

    
  SendVerificationMail() {
    return this._angularFireAuth.currentUser
      .then((user) => {
        return user?.sendEmailVerification();
      })
      .then(() => {
        //this.router.navigate(['verify-email-address']);
      });
  }


}
