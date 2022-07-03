import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent implements OnInit {
@Input() cardData:any
  url: any;
  constructor() { }

  ngOnInit(): void {
    this.url=this.cardData.img
    // console.log(this.cardData.img,"cardData")
  }

}
