import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from "../../models/user";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private user: User;
  private isDropDownOpened: any;
  constructor(private authService: AuthService){}

  //Sends a random value so every event will be captured as a change
  @HostListener('document:click', ['$event']) clickOutside($event){
    this.isDropDownOpened = Math.random();
   }

  ngOnInit() {
    console.log(this.authService.getUserDetails());
  }

  clickInside($event: Event){
    $event.preventDefault();
    $event.stopPropagation();
  }

}
