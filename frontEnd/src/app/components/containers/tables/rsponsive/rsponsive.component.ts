import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { User } from '../../../../models/user';
import { UserService } from '../../../../services/user.service';

@Component({
  selector: 'app-rsponsive',
  templateUrl: './rsponsive.component.html',
  styleUrls: ['./rsponsive.component.scss']
})
export class RsponsiveComponent implements OnInit {
  displayedColumns: string[] = ['no', 'name', 'username', 'email'];
  dataSource: MatTableDataSource<User>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  users: User[] = [];

  constructor(
    private userService: UserService
  ) {

    this.userService.getUserAll().subscribe( data => {
      this.users = data as User[];  
      this.dataSource = new MatTableDataSource(this.users);      

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    },
    err => {
      console.log(err);
      return false;
    });    
  }

  ngOnInit() {
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
