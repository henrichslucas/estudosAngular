import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-data-binding',
  templateUrl: './two-way-data-binding.component.html',
  styleUrls: ['./two-way-data-binding.component.css']
})
export class TwoWayDataBindingComponent implements OnInit {
  name1: String = "INICIALIZANDO"
  name2: String = "INICIALIZANDO 2"

  client = {
    firstName:"Lucas",
    lastName:"Henrichs",
    address:"Brasil",
    age:"20"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
