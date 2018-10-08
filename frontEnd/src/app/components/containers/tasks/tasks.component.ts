import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Task } from '../../../models/task';
import { TaskService } from '../../../services/task.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  private hideNewTask:boolean = true;
  optionsCategory: string[] = ['Daily', 'Weekly', 'Monthly'];
  public displayedColumns = ['tb_title', 'name', 'startDate', 'endDate', 'description'];

  dailyDataSource: MatTableDataSource<Task>;  
  weeklyDataSource: MatTableDataSource<Task>;
  monthlyDataSource: MatTableDataSource<Task>;

  dailyTask: Array<Task>;
  weeklyTask: Array<Task>;
  monthlyTask: Array<Task>;

  private daily: string = 'Daily';
  private weekly: string = 'Weekly';
  private monthly: string = 'Monthly';

  constructor(
    private taskService: TaskService
  ) { 
    this.refreshTaskAll();
  }

  ngOnInit() {
  }

  refreshTaskAll(){
    this.getDailyTaskAll(this.daily);
    this.getWeeklyTaskAll(this.weekly);
    this.getMonthlyTaskAll(this.monthly);
  }  

  onSubmitTask(task: Task){
    this.taskService.addTask(task).subscribe( 
      data => {
        console.log('Add task successfully!');
        this.newTask();
        this.refreshTaskAll();
      },
      err => {
        console.log('Failed to add task!');
        return false;
      }
    )
  }

  newTask(){
    if(this.hideNewTask == false){
      this.hideNewTask = true;
    } else {
      this.hideNewTask = false;
    }    
  }


  getDailyTaskAll(category: string){
    this.taskService.getDailyTaskAll(category).subscribe(
      data => {        
        this.dailyTask = data as Task[];        
        this.dailyDataSource = new MatTableDataSource(this.dailyTask);  
      },
      err => {
        console.log('Failed to get task!');
        return false;
      }
    );
  };

  getWeeklyTaskAll(category: string){
    this.taskService.getWeeklyTaskAll(category).subscribe(
      data => {        
        this.weeklyTask = data as Task[];        
        this.weeklyDataSource = new MatTableDataSource(this.weeklyTask);  
      },
      err => {
        console.log('Failed to get task!');
        return false;
      }
    );
  };

  getMonthlyTaskAll(category: string){
    this.taskService.getMonthlyTaskAll(category).subscribe(
      data => {        
        this.monthlyTask = data as Task[];        
        this.monthlyDataSource = new MatTableDataSource(this.monthlyTask);  
      },
      err => {
        console.log('Failed to get task!');
        return false;
      }
    );
  };

  resetForm(form: NgForm){
    form.reset();
  }
}
