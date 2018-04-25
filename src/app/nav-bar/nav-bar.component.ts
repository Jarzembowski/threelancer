import { Component, OnInit, ViewChild, AfterViewInit, Input } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from "../../models/user";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  private user: User = new User();
   @Input() clickedOutside: any;

  constructor(private authService: AuthService){}

  ngOnInit() {
    this.user.name = this.authService.getUserDetails().displayName;
  }

  logout(){
    this.authService.logout()
  }

}
