import { Injectable } from '@angular/core';
import { User } from "../../models/user";
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from "@angular/router";

@Injectable()
export class AuthService {

  private user: Observable<firebase.User>;
  private userDetails: firebase.User = null;

  constructor(private _firebaseAuth: AngularFireAuth, private router: Router) {
      this.user = _firebaseAuth.authState;
      this.user.subscribe(
          (user) => {
            if (user) {
              this.userDetails = user;
              this.router.navigate(['home']);
            }
            else {
              this.userDetails = null;
              this.router.navigate(['login']);
            }
          }
        );
  }

  signInWithFacebook() {
    return this._firebaseAuth.auth.signInWithPopup(
      new firebase.auth.FacebookAuthProvider()
    )
  }

  emailSignUp(credentials: User){
    this._firebaseAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password).catch(function(error) {
      console.log(error.message);
    });
 }

 signInWithEmail(credentials: User) {
     return this._firebaseAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password)
 }

  isLoggedIn() {
  if (this.userDetails == null) {
      return false;
    } else {
      return true;
    }
  }

  getUserDetails() {
    if(this.isLoggedIn)
      return this.userDetails;
  }

  logout() {
      this._firebaseAuth.auth.signOut()
      .then((res) => this.router.navigate(['/login']));
    }

  }
