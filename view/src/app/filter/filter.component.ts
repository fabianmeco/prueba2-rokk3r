import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import * as moment from 'moment'

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
pendingTasks : Task []= [];
overdueTasks : Task[] =[];
order: string = 'name';
reverse: boolean = false;
  constructor(private http: HttpClient) { }
 
  ngOnInit() {
    let pendingQuery = ['dueDate','>=', moment().format()];
    let overdueQuery = ['dueDate','<', moment().format()];
    this.http.get<Task[]>('http://localhost:3000/task',{
      params:{
        where : JSON.stringify(pendingQuery)
      }
    }).subscribe( data =>{
        this.pendingTasks = data;
    })
    this.http.get<Task[]>('http://localhost:3000/task', {
      params:{
        where : JSON.stringify(overdueQuery)
      }
    }).subscribe( data =>{
      this.overdueTasks = data;
  })
  }

  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
  }

}

interface Task{
  name:string;
  priority: number;
  dueDate: Date;
  createdAt: Date;
  updatedAt: Date;
  id: number;
}