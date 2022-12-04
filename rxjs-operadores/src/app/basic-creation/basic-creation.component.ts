import { Component, OnInit } from '@angular/core';
import { from, fromEvent, interval, Observable, of, Subscription, timer } from 'rxjs'

@Component({
  selector: 'app-basic-creation',
  templateUrl: './basic-creation.component.html',
  styleUrls: ['./basic-creation.component.css']
})
export class BasicCreationComponent implements OnInit {

  subscription: Subscription = new Subscription();

  constructor() { }

  ngOnInit(): void {
  }

  observableCreate() {
    const hello = new Observable<string>(observer => {
      observer.next('Hello');
      observer.next('from');
      observer.next('observable!');
      observer.complete();
    });
    hello.subscribe((val) => console.log(val));
  }

  fromClick() {
    from([1, 2, 3, 4, 5, { x: 10, y: 20 }])
      .subscribe((v) => console.log(v));

    const src = from([1, 2, 3, 4, 5, { x: 10, y: 20 }]);
    src.subscribe((v) => console.log(v));
  }

  ofClick() {
    of([1, 2, 3, 4, 5, { x: 10, y: 20 }])
      .subscribe((v) => console.log(v));
  }

  intervalClick() {
    const src = interval(1000);
    src.subscribe((v) => console.log(v));
  }

  timerClick() {
    const src = timer(1000, 100);
    this.subscription = src.subscribe((v) => console.log(v));
  }

  unsubscribeClick(){
    this.subscription.unsubscribe();
    this.subscription = new Subscription();
  }

  fromEventClick(){
    const src = fromEvent(document, 'click');
    this.subscription = src.subscribe((v)=> console.log(v))
  }
}
