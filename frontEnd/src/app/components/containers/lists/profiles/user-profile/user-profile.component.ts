import {Component, OnInit } from '@angular/core';

import { User } from '../../../../../models/user';
import { UserService } from '../../../../../services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit{  
  title: string;
  editTitle: string;

  userProfile: any;
  googleUserProfile: any;

  constructor(
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.getUserProfile();
  }

  getUserProfile(){
    this.userProfile = JSON.parse(localStorage.getItem('user')); 
    this.googleUserProfile = JSON.parse(localStorage.getItem('gUser'));   
    this.title =  this.userProfile.username[0].toUpperCase() + this.userProfile.username.substr(1).toLowerCase();
  }

  changeTitle(){
    this.userService.editTitle(this.editTitle);    
  }

}
