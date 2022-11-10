import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {
  firstName = "Lucas"
  person = {
    firstName:"Lucas",
    lastName: "Henrichs"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
