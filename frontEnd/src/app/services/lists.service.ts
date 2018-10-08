import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
//import { DatePipe } from '@angular/common';
import { Staff } from '../models/staff';

@Injectable({
  providedIn: 'root'
})
export class ListsService {
  constructor(
    
  ) { }

  // ======== Staff Service Start ===========
  staff : Staff;
  staffs: Staff[] = [];

  form: FormGroup = new FormGroup({
    _id: new FormControl(''),
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    mobile: new FormControl('', [Validators.required, Validators.minLength(10)]),
    city: new FormControl(''),
    gender: new FormControl('1'),
    department: new FormControl(0),
    hireDate: new FormControl(''),
    isPermanent: new FormControl('')
  });  

  initializeFormGroup(){
    this.form.setValue({
      fullName: '',
      email: '',
      mobile: '',
      city: '',
      gender: '1',
      department: 0,
      hireDate: '',
      isPermanent: '' 
    });
  }

  getStaff(){

  }

  addStaff(staff: Staff){

  }

  updateStaff(staff: Staff){

  }

  deleteStaff(_id: string){

  }

  // ======== Staff Service End ===========

}
