import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { CommonService } from '../../services/common.service';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

declare var M: any;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  providers: [UserService]
})
export class SignupComponent implements OnInit {
  // case 1.
  // emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // showSuccessMessage: boolean;
  // serverErrorMessages: string;

  // 2.
  name: String;
  username: String;
  email: String;
  password: String;
  date: String;

  constructor(
    private commonService: CommonService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.date = this.commonService.getTodayDate();
  }

  // case 1.
  // onSubmit(form: NgForm){
  //   this.userService.addUser(form.value).subscribe(
  //     res => {
  //       this.showSuccessMessage = true;
  //       setTimeout(() => this.showSuccessMessage = false, 3000);
  //       this.resetForm(form);
  //       this.router.navigate(['/login']);
  //     },
  //     err => {
  //       if(err.status == 422){
  //         this.serverErrorMessages = err.error.join('<br/>');
  //       } else {
  //         this.serverErrorMessages = 'Something went wrong. Please contact admin.';
  //       }
  //     }
  //   );
  // }

  // case 2.
  onSubmit(){
    const user = {
      name: this.name,
      username: this.username,
      email: this.email,
      password: this.password,
      createdDate: this.date
    }

    console.log('createdDate: '+this.date);
    
    this.userService.addUser(user).subscribe( 
      res => {        
        M.toast({html: 'Registered Successfully', classes: 'rounded'});
        this.router.navigate(['/login']);
      }, err => {
        M.toast({html: 'Failed to register', classes: 'rounded'});
        this.router.navigate(['/register']);
      }    
    );
  }

  // case 1.
  // resetForm(form: NgForm){
  //   this.userService.selectedUser = {
  //     _id: '',
  //     name: '',
  //     username: '',
  //     email: '',
  //     password: ''
  //   };
  //   form.resetForm();
  //   this.serverErrorMessages = '';
  // }

  goBack(){
    this.router.navigate(['/main']);
  }

}
