import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {
  names = ['Lucas','Paula','rodrigo']

  cities = [
    {name: "Sao Paulo", state: "SP"},
    {name: "Porto Alegre", state: "RS"},
    {name: "RIo de Janeiro", state: "RJ"}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
