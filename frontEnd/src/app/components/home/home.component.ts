import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
 
declare var M: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  signInWithGoogle(){
    this.auth.signInWithGoogle();   
    // if(localStorage.getItem('gUser') != null){
    //   M.toast({html: 'Logged in using Google Account successfully', classes: 'rounded'});
    //   this.router.navigate(['/home']);
    // } else {
    //   M.toast({html: 'Failed to Log In', classes: 'rounded'});
    //   this.router.navigate(['/main']);
    // }

  }
}
