import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-container',
  templateUrl: './ng-container.component.html',
  styleUrls: ['./ng-container.component.css']
})
export class NgContainerComponent implements OnInit {
  users = [
    {login: "bob", role: "admin", lastLogin: new Date('2/1/2018')},
    {login: "lia", role: "user", lastLogin: new Date('4/1/2018')},
    {login: "john", role: "admin", lastLogin: new Date('6/1/2018')}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
