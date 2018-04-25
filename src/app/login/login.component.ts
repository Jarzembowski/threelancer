import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from "../../models/user";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
      styleUrls: ['./login.component.css']
})
export class LoginComponent {

  private user: User = {};
  private email:string;
  private password:string;

  constructor(private router: Router, private authService: AuthService){
  }

  signInWithFacebook() {
    this.authService.signInWithFacebook()
    .then((res) => {
    this.router.navigate(['home'])
    })
    .catch((err) => console.log(err));
  }

  signInWithEmail(){
    this.user.email = this.email;
    this.user.password = this.password;
    this.authService.signInWithEmail(this.user)
    .then((res) => {
    this.router.navigate(['home'])
    })
    .catch((err) => console.log(err));
  }

}
