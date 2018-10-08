import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { CommonService } from '../../../../../services/common.service';
import { Event } from '../../../../../models/event';

declare var M: any;

@Component({
  selector: 'app-event-datail',
  templateUrl: './event-datail.component.html',
  styleUrls: ['./event-datail.component.scss']
})
export class EventDatailComponent implements OnInit {

  optionsEvent: string[] = ['Event1', 'Event2', 'Event3', 'Event4', 'Event5'];
  
  constructor(
    private commonService: CommonService,
    private router: Router,
    //private formBuilder: FormBuilder,
    private matDialogRef: MatDialogRef<EventDatailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){ 
    //console.log("MemberProfileComponent form.value: "+JSON.stringify(form.value));
    this.commonService.updateEvent(form.value).subscribe(
      data => {
        //console.log("data: "+JSON.stringify(data));
        this.close();
        M.toast({html: 'Updated Successfully', classes: 'rounded'});          
        this.router.navigate(['/home/events']);
      },
      err => {
        this.close();
        M.toast({html: 'Failed to update', classes: 'rounded'});
        this.router.navigate(['/home/events']); 
      }
    );
          
  }

  public close(){
    this.matDialogRef.close();    
  }
}
