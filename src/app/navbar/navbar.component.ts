import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private serviceservice:ServiceService) { }

  ngOnInit(): void {
  }
  showDialog(){
    this.serviceservice.showContactUs.next(true)
  }
}
