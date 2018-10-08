import { Component, OnInit , ElementRef, ViewChild} from '@angular/core';
import { ExampleDatabase, ExampleDataSource } from './helpers.data';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-fixed',
  templateUrl: './fixed.component.html',
  styleUrls: ['./fixed.component.scss']
})
export class FixedComponent implements OnInit {
  
  public displayedColumns = ['userId', 'userName', 'progress', 'color'];
	public exampleDatabase = new ExampleDatabase();
	public dataSource: ExampleDataSource | null;
  public showFilterTableCode;
  
  constructor() { }

  ngOnInit() {
    this.dataSource = new ExampleDataSource(this.exampleDatabase);
  }

}

