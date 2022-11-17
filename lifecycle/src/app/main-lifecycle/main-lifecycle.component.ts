import { Component, OnInit } from '@angular/core';
import { Client } from './client';

@Component({
  selector: 'app-main-lifecycle',
  templateUrl: './main-lifecycle.component.html',
  styleUrls: ['./main-lifecycle.component.css']
})
export class MainLifecycleComponent implements OnInit {

  public name: any
  public age: any
  public food: any
  public foods: string[] = ["Arroz", "Feijao", "Pizza"]
  public clients: Client[] = []
  public onEdit: boolean = false;


  constructor() { }

  

  ngOnInit(): void {
  }

  save() {
    if (this.onEdit != false) {
      this.clients.push({
        name: this.name, age: this.age, food: this.food
      })
    }
  }

}
