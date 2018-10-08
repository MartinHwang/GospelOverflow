import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';
import { tokenNotExpired } from 'angular2-jwt';

import { GUser } from '../models/googleUser';

declare var M: any; 

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: any;
  user: any;

  uid: any;
  gUser: any;

  constructor(
    private afAuth: AngularFireAuth,
    public afs: AngularFirestore,
    private router: Router
  ) { }

  // Authenticating with Google
  signInWithGoogle(){
    const provider = new firebase.auth.GoogleAuthProvider();
    this.afAuth.auth.signInWithPopup(provider).then( (credential) => {      
      this.updateUser(credential.user);    

      localStorage.setItem('uid',credential.user.uid);    
      localStorage.setItem('gUser', JSON.stringify(credential.user));    
      this.uid = credential.user.uid;
      this.gUser = credential.user;    

      console.log('AuthService gUser: '+JSON.stringify(this.gUser));

      M.toast({html: 'Logged in using Google Account successfully', classes: 'rounded'});
        
    });     
    this.router.navigate(['/home']);
  }

  updateUser(user){
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const data: GUser = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      phoneNumber: user.phoneNumber,
      roles: {
        subscriber: true,
        admin: false
      }
    }
    // var user123 = firebase.auth().currentUser;
    // console.log('google user123: '+JSON.stringify(user123));
    
    return userRef.set(data, {merge: true});
  }

  
  //=========== Helper Methods

  // Saving User information in LocalStorage
  storeUserData(token, user){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;    
  }  

  // googleStoreUserData(uid,user){
  //   localStorage.setItem('uid',uid);    
  //   localStorage.setItem('gUser', JSON.stringify(user));    
  //   this.uid = uid;
  //   this.gUser = user;        
  // }

  // Putting token to localStorage
  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  deleteToken(){
    localStorage.removeItem('id_token');
  }

  // Confirming user Logged in
  loggedIn(){
    return tokenNotExpired('id_token');
  }

  googleLoggedIn(){
    let isGoogle: boolean;
    var cUser = firebase.auth().currentUser;
    if(cUser != null){
      isGoogle = true;
    } else {
      isGoogle = false;
    }

    return isGoogle;
  }

  // Log out 
  logout(){
    this.authToken = null;
    this.user = null;
    this.uid = null;
    this.gUser = null;
    localStorage.clear();
    M.toast({html: 'Logged out successfully', classes: 'rounded'});    
    this.router.navigate(['/main']);
  }

  logoutForGoogleAccount(){
    this.afAuth.auth.signOut().then( () => {
      this.logout();      
    });
  }

}
