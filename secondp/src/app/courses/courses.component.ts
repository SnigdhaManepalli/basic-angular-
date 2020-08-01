import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  isChecked=true;
  onChange($event) {
    console.log($event);
  }
  colors = [
    {id:1 , name: 'Red'},
    {id:2 , name: 'Green'},
    {id:3 , name: 'Blue'},
  ]
  color=2;
}