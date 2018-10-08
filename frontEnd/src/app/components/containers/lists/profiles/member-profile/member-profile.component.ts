import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { Member } from '../../../../../models/member';
import { MemberService } from '../../../../../services/member.service';

declare var M: any;

@Component({
  selector: 'app-member-profile',
  templateUrl: './member-profile.component.html',
  styleUrls: ['./member-profile.component.scss']
})
export class MemberProfileComponent implements OnInit {
 
  constructor(
    private memberService: MemberService,
    private router: Router,
    //private formBuilder: FormBuilder,
    private matDialogRef: MatDialogRef<MemberProfileComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {  
  }

  public close(){
    this.matDialogRef.close();    
  }

  onSubmit(form: NgForm){      
    this.memberService.editMember(form.value).subscribe(
      data => {
        //console.log("data: "+JSON.stringify(data));
        this.close();
        M.toast({html: 'Updated Successfully', classes: 'rounded'});          
        this.router.navigate(['/home/members']);
      },
      err => {
        this.close();
        M.toast({html: 'Failed to update', classes: 'rounded'});
        this.router.navigate(['/home/members']); 
      }
    );
          
  }   

}
