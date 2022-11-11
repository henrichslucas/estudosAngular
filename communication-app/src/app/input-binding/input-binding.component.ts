import { Component, OnInit, Input } from '@angular/core';
import { Client } from './client/client.model';

@Component({
  selector: 'app-input-binding',
  templateUrl: './input-binding.component.html',
  styleUrls: ['./input-binding.component.css']
})
export class InputBindingComponent implements OnInit {
  /*@Input() firstName: string = '';
  @Input() age: number = 0;*/

  clients: Client[]
  constructor() {
    this.clients = [
      {id:1, name:"Bob", age:20},
      {id:2, name:"Ana", age:26},
      {id:3, name:"Paul", age:22},
    ]
  }

  ngOnInit(): void {
  }

}
