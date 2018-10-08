import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-popup-member',
  templateUrl: './popup-member.component.html',
  styleUrls: ['./popup-member.component.scss']
})
export class PopupMemberComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<PopupMemberComponent>
  ) { }

  ngOnInit() {
  }

  onClose(){
    this.dialogRef.close();
  }

}
