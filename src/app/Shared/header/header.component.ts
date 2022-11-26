import { UsersDataService } from './../../Users/Shared/users-data.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Location } from '@angular/common';
import { filter, map, Subscription } from 'rxjs';
import { TooltipPosition } from '@angular/material/tooltip';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  islogin_or_register: boolean = false;
  routepathsubscr!: Subscription;
  currentUrl: string = ""; 
  userEmail:string="";

  constructor(private location: Location, private router: Router,private userdataservice:UsersDataService) { }

  ngOnInit(): void {
    debugger
   this.routepathsubscr= this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.url;
        console.log("url",this.currentUrl)
        if(this.currentUrl ==='/home'){
          this.islogin_or_register = true;
          this.userEmail =this.userdataservice.loginedUserEmail;

        }
      }
    });
  }

  ngOnDestroy(): void {
    this.routepathsubscr.unsubscribe();
  }
  Logout(){
    this.islogin_or_register = false;
    this.router.navigateByUrl('login');
  }

}
