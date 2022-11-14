import { Component, OnInit, ViewChild } from '@angular/core';
import { TimerComponent } from './timer/timer.component';

@Component({
  selector: 'app-parent-child',
  templateUrl: './parent-child.component.html',
  styleUrls: ['./parent-child.component.css']
})
export class ParentChildComponent implements OnInit {

  @ViewChild("stopwatch2")
  public myTimer!: TimerComponent;

  constructor() { }

  ngOnInit(): void {
  }

  startClock() {
    this.myTimer.startClock()
  }
  stopClock() {
    this.myTimer.stopClock()
  }
  resetClock() {
    this.myTimer.resetClock()
  }
}

