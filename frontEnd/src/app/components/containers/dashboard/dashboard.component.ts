import { Component, OnInit } from '@angular/core';
import { MemberService } from '../../../services/member.service';
import { Member } from '../../../models/member';

import { CommonService } from '../../../services/common.service';
import { Event } from '../../../models/event';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  members: Member[];

  maleNum: number = 55;
  femaleNum: number = 75;
  stuNumOver20: number = 34;
  TeenNum: number = 21;
  ToddNum: number = 15;
  babyNum: number = 12;  

  total2013: number = 205;
  total2014: number = 175;
  total2015: number = 198;
  total2016: number = 227;
  total2017: number = 231;

  firstWeek: number = 4005;
  secondWeek: number = 2575;
  thirdWeek: number = 3998;
  fourthWeek: number = 3527;
  fifthWeek: number = 4531;

  month: string;
  date: string;
  arrDate: any = [];
  description: string;

  constructor(
    private memberService: MemberService,
    private commonService: CommonService
  ){}

  ngOnInit(){
    this.refreshMemberList();
    this.getEvent();
  }

  getEvent(){
    this.commonService.getEventAll().subscribe(
      data => {  
        // console.log('data: '+JSON.stringify(data));
        // console.log('data.length: '+data.length);

        data.forEach( date => {
          this.arrDate.push(new Date(date.eventDate));       
        });

        var today = new Date(Date.now()).toLocaleString();
        var arrToday = today.split('.');
        var todayArrInt = parseInt(arrToday[0]) + parseInt(arrToday[1]) + parseInt(arrToday[2]);
        console.log('todayArrInt: '+todayArrInt);
        var temp;
        var minVal = 0;
        var InnerDate: any;

        for(let i = 0; i < data.length; i++)
        {
          var eventDate = data[i].eventDate.substring(0,10);
          //var arrayDate = data[i].eventDate.toLocaleString().split(','); 
          var arrayDate = eventDate.toLocaleString().split('-'); 
          var arrayDateInt = parseInt(arrayDate[0]) + parseInt(arrayDate[1]) + parseInt(arrayDate[2]);  

          if( arrayDateInt >= todayArrInt){
            temp = arrayDateInt - todayArrInt;
            
            if( minVal == 0 ){
              minVal = temp;
              InnerDate = arrayDate;  
              this.description = data[i].description;        
            } 
            
            if( temp < minVal ){
              minVal = temp;
              InnerDate = arrayDate;  
              this.description = data[i].description;                      
            } 

          } else {
            InnerDate = arrToday; 
            this.description = 'There is no event today';            
          }
        }
        
        this.month = this.getMonth(parseInt(InnerDate[1]));
        if(parseInt(InnerDate[2]) < 10){
          this.date = '0'+InnerDate[2];
        } else {
          this.date = InnerDate[2];
        }      

      }
    )
  }

  getMonth(month){
    let thisMonth: string;
    switch(month){
      case 1:
        thisMonth = 'January'; break;
      case 2:
        thisMonth = 'February'; break;
      case 3:
        thisMonth = 'March'; break;
      case 4:
        thisMonth = 'April'; break;
      case 5:
        thisMonth = 'May'; break;
      case 6:
        thisMonth = 'June'; break;
      case 7:
        thisMonth = 'July'; break;
      case 8:
        thisMonth = 'August'; break;
      case 9:
        thisMonth = 'September'; break;
      case 10:
        thisMonth = 'October'; break;
      case 11:
        thisMonth = 'November'; break;
      case 12:
        thisMonth = 'December'; break;
      default:
        break;
    }
    return thisMonth;
  }

  refreshMemberList() {
    this.memberService.getThreeMembers().subscribe((res) => {
      this.memberService.members = res as Member[];
      this.members = this.memberService.members;      
    });
  }

  // Pie Chart
  pieChartData =  {
    chartType: 'PieChart',
    dataTable: [
      ['Task', 'Hours per Day'],
      ['Male', this.maleNum],
      ['Female', this.femaleNum],
      ['Student over 20', this.stuNumOver20],
      ['Teenager', this.TeenNum],
      ['Toddler', this.ToddNum],
      ['Baby', this.babyNum]
    ],
    options: {'title': 'Gender Rating'}
  };

  // Bar Chart
  barChartData =  {
    chartType: 'BarChart',
    dataTable: [
      ['TasK', 'Numbers'],
      ['2013', this.total2013],
      ['2014', this.total2014],
      ['2015', this.total2015],
      ['2016', this.total2016],
      ['2017', this.total2017]
    ],
    options: {'title': 'Total Church Member'}
  };

  // Line Chart
  lineChart =  {
    chartType: 'LineChart',
    dataTable: [
      ['TasK', 'Numbers'],
      ['1week', this.firstWeek],
      ['2week', this.secondWeek],
      ['3week', this.thirdWeek],
      ['4week', this.fourthWeek],
      ['5week', this.fifthWeek]
    ],
    options: {'title': 'Weekly Revenue'}
  };


  public dashCardData = [
    { colorDark: '#5C6BC0', colorLight: '#7986CB', number: 1221, title: 'TEST1', icon: 'account_circle' },
    { colorDark: '#42A5F5', colorLight: '#64B5F6', number: 1222, title: 'TEST2', icon: 'card_travel' },
    { colorDark: '#26A69A', colorLight: '#4DB6AC', number: 1223, title: 'TEST3', icon: 'business' },
    { colorDark: '#66BB6A', colorLight: '#81C784', number: 1224, title: 'TEST4', icon: 'select_all' }
  ];


}


