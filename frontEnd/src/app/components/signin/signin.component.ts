import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';

declare var M:any;

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  email: String;
  password: String;
  
  constructor(
    private router: Router,
    private userService: UserService,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  onSignInSubmit(){
    const user = {
      email: this.email,
      password: this.password
    }

    this.userService.singIn(user).subscribe( data => {
      if(data.success){          
        this.authService.storeUserData(data.token, data.user);
        M.toast({ html: 'Logged in successfully', classes: 'rounded'});     
        this.router.navigate(['/home']);
      } else {
        M.toast({html: data.msg, classes: 'rounded'});        
        this.router.navigate(['/login']);   
      }
    });    
  }

  goBack(){
    this.router.navigate(['/main']);
  }

}
