import { Component, OnInit } from '@angular/core';
import { interval, Observable, Observer, Subscription } from 'rxjs';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.css']
})
export class BasicsComponent implements OnInit {

  subs1!: Subscription;
  subs2!: Subscription
  n1: number = 0;
  n2: number = 0;
  s1: string = 'Initializing...';
  s2: string = 'Initializing...';

  constructor() { }

  ngOnInit(): void {



    //criando observable que conta ate 5
    const myFirstObservable = new Observable(
      (observer: Observer<number>) => {
        observer.next(1);
        observer.next(2);
        observer.next(3);
        observer.next(4);
        observer.next(5);
        //observer.error("deu ruim");
        observer.complete();
      }
    );

    //cadastrando no observable 
    myFirstObservable.subscribe({
      next: (n: number) => console.log(n),
      error: (err: string) => console.error(err),
      complete: () => console.log('completo'),
    })
    

    /*const timerCount = interval(1000);
    timerCount.subscribe({
      next(n: any) {
        console.log(n)
      },
    })
    console.warn("after interval")*/


    //observable que conta de 0 ate 11
    const myIntervalObservable = new Observable(
      (observer: Observer<any>) => {
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
    )

    this.subs1 = myIntervalObservable.subscribe({
      next: (n) => this.n1 = n,
      error: (err) => this.s1 = 'Error: ' + err,
      complete: () => this.s1 = 'Completed',
    });

    this.subs2 = myIntervalObservable.subscribe({
      next: (n) => this.n2 = n,
      error: (err) => this.s2 = 'Error: ' + err,
      complete: () => this.s2 = 'Completed',
    });

    setTimeout(() => {
      this.subs1.unsubscribe;
      this.subs2.unsubscribe;
    })

  }
}
