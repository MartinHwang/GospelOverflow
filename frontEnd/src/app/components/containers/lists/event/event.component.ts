import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NgForm } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { MemberService } from '../../../../services/member.service';
import { EventDatailComponent } from '../event/event-datail/event-datail.component';
import { CommonService } from '../../../../services/common.service';

import { Event } from '../../../../models/event';

declare var M: any;

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  displayedColumns: string[] = ['no', 'contactPerson', 'email', 'cellphone', 'category', 'title', ' '];
  dataSource: MatTableDataSource<Event>;

  optionsEvent: string[] = ['Event1', 'Event2', 'Event3', 'Event4', 'Event5'];
  eventData: any;  
  events: Array<Event>; 

  constructor(
    private dialog: MatDialog,
    private commonService: CommonService
  ) {}

  ngOnInit() {
    this.refreshEventList();   
  }

  refreshEventList(){
    this.commonService.getEventAll().subscribe(
      data => {  
        this.events = data as Event[];
        this.dataSource = new MatTableDataSource(this.events);
      }
    )
  }

  public openModal(){    
    const dialogRef = this.dialog.open(EventDatailComponent, {      
      data: { 
        _id: this.eventData.event['_id'],
        contactPerson: this.eventData.event['contactPerson'],
        email: this.eventData.event['email'],
        cellphone: this.eventData.event['cellphone'],    
        category: this.eventData.event['category'],      
        title: this.eventData.event['title'],
        eventDate: this.eventData.event['eventDate'],
        description: this.eventData.event['description']
      } 
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');       
      this.refreshEventList();
    });
  }  

  onSubmit(event: Event, eventForm: NgForm){    
    this.commonService.addEvent(event).subscribe(
      res => {
        this.resetForm(eventForm);
        M.toast({html: 'Registered Successfully', classes: 'rounded'});
        this.refreshEventList();
      }, 
      err => {
        this.resetForm(eventForm);
        M.toast({html: 'Failed to register', classes: 'rounded'});
        this.refreshEventList();
      }
    )
  }

  onEdit(event: Event){
    this.commonService.getEvent(event).subscribe( data => {
      this.eventData = data;
      console.log('this.eventData: '+JSON.stringify(this.eventData)); 
      this.openModal();
    });        
  }

  onDelete(event: Event){
    console.log('event: '+event._id); 
    if(confirm('Are you sure to delete this event?') == true){
      this.commonService.deleteEvent(event).subscribe((res) => {
        this.refreshEventList();        
        M.toast({html: 'Deleted Successfully', classes: 'rounded'});
      });      
    }     
  }

  resetForm(event: NgForm){       
    event.reset();
  }
}
