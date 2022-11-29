import { Component, OnInit } from '@angular/core';
import { interval, Observable, Observer, Subscription } from 'rxjs';

@Component({
  selector: 'app-cold-observables',
  templateUrl: './cold-observables.component.html',
  styleUrls: ['./cold-observables.component.css']
})
export class ColdObservablesComponent implements OnInit {
  subs1!: Subscription;
  subs2!: Subscription
  n1: number = 0;
  n2: number = 0;
  s1: string = 'Initializing...';
  s2: string = 'Initializing...';

  constructor() { }

  ngOnInit(): void {

    //observable que conta de 0 ate 11
    const myIntervalObservable = new Observable(
      (observer: Observer<number>) => {
        let i: number = 0;
        let id = setInterval(() => {
          i++;
          console.log("from observable: ", i);
          if (i % 2 == 0) {
            observer.next(i);
          } else if (i == 11) {
            observer.complete();
          }
        }, 500);
        return () => {
          clearInterval(id);
        }
      }
    );
    //dois subscribes, 2 fontes de dados diferentes
    this.s1 = 'waiting...';
    this.subs1 = myIntervalObservable.subscribe({
      next: (n) => this.n1 = n,
      error: (err) => this.s1 = 'Error: ' + err,
      complete: () => this.s1 = 'Completed',
    });

    this.s2 = 'waiting...';
    setInterval(()=>{
      this.subs2 = myIntervalObservable.subscribe({
        next: (n) => this.n2 = n,
        error: (err) => this.s2 = 'Error: ' + err,
        complete: () => this.s2 = 'Completed',
      });
    },3000);
  
    setTimeout(() => {
      this.subs1.unsubscribe;
      this.subs2.unsubscribe;
    })

  }
}

