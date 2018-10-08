import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NgForm } from '@angular/forms';
import { FormControl } from '@angular/forms';

import { MatTableDataSource } from '@angular/material';
import { MemberService } from '../../../../services/member.service';
import { Member } from '../../../../models/member';
import { MemberProfileComponent } from '../profiles/member-profile/member-profile.component';
import { CommonService } from '../../../../services/common.service';
declare var M: any;

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {

  displayedColumns: string[] = ['no', 'firstName', 'lastName', 'position', 'email', 'cellphone', ' '];
  dataSource: MatTableDataSource<Member>;

  memberData: any;

  optionsGender: string[] = ['Male', 'Female'];
  optionsPosition: string[] = ['Layman(평신도)','Deaconess(여자집사)','Deacon(남자집사)','Ordained deacon(안수집사)','Senior Deaconess(권사)','Elder(장로)','Active Elder(시무장로)','Junior Pastor(전도사)','Assistant Pastor(부목사)','Senior Pastor(담임목사)'];
  optionsServiceDept: string[] = ['Sunday school(주일학교)','Hi-C(중고등부)','Youth(청년부)','Choir(성가대)','Accompanist(반주자)','Executive(행정)'];
  optionsServiceGroup: string[] = ['1','2','3','5','6','7','8','9','10'];

  constructor(
    private memberService: MemberService,
    private dialog: MatDialog,
    private commonService: CommonService,
  ) {}

  ngOnInit() {
    //this.date = this.commonService.getTodayDate();
    this.refreshMemberList();    
  }

  refreshMemberList() {
    this.memberService.getMemberAll().subscribe((res) => {
      this.memberService.members = res as Member[];

      this.dataSource = new MatTableDataSource(this.memberService.members);

      console.log('Refreshed Member List'); 
    });
  }

  public openModal(){    
    const dialogRef = this.dialog.open(MemberProfileComponent, {      
      data: { 
        _id: this.memberData.member['_id'],
        firstName: this.memberData.member['firstName'],
        lastName: this.memberData.member['lastName'],
        gender: this.memberData.member['gender'],    
        birth: this.memberData.member['birth'],      
        email: this.memberData.member['email'],
        phone: this.memberData.member['phone'],
        cellphone: this.memberData.member['cellphone'],
        postalCode: this.memberData.member['postalCode'],
        address: this.memberData.member['address'],
        job: this.memberData.member['job'],
        workplace: this.memberData.member['workplace'],
        position: this.memberData.member['position'],
        serviceDept: this.memberData.member['serviceDept'],
        serviceGroup: this.memberData.member['serviceGroup'],
        comment: this.memberData.member['comment']
      } 
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed'); 
      
      this.refreshMemberList();    
	});

  }  

  onSubmit(form: NgForm){
    //console.log("mComponent form : "+JSON.stringify(form.value));
    this.memberService.addMember(form.value).subscribe(
      res => {
        this.resetForm(form);
        M.toast({html: 'Registered Successfully', classes: 'rounded'});
        this.refreshMemberList();
      }, 
      err => {
        this.resetForm(form);
        M.toast({html: 'Failed to register', classes: 'rounded'});
        this.refreshMemberList();
      }
    )
  }

  onEdit(email: string){
    this.memberService.getMember(email).subscribe( data => {
      this.memberData = data;
      //console.log('this.memberData: '+JSON.stringify(this.memberData)); 
      this.openModal();
    });        
  }

  onDelete(id: string){
    console.log('id: '+id); 
    if(confirm('Are you sure to delete this member?') == true){
      this.memberService.deleteMember(id).subscribe((res) => {
        this.refreshMemberList();        
        M.toast({html: 'Deleted Successfully', classes: 'rounded'});
      });      
    }     
  }

  resetForm(form?: NgForm){    
    if (form)
      form.reset();
    this.memberService.selectedMember = {
      _id: "",
      firstName: "", 
      lastName: "",  
      gender: "",      
      birth: "",
      job: "",
      address: "",
      postalCode: "",
      email: "",
      phone: "",
      cellphone: "",
      workplace: "",
      position: "",
      serviceDept: "", 
      serviceGroup: "",      
      comment: "",
      createdDate: "",
      modifiedDate: ""
    }    
  }

}


