import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-hot-observables-intro',
  templateUrl: './hot-observables-intro.component.html',
  styleUrls: ['./hot-observables-intro.component.css']
})
export class HotObservablesIntroComponent implements OnInit {

  @ViewChild('myBtn', { static: true }) button !: ElementRef<HTMLButtonElement>;


  n1: number = 0;
  n2: number = 0;
  s1: string = 'Initializing...';
  s2: string = 'Initializing...';
  constructor() { }

  ngOnInit(): void {
    let myBtnObservable: Observable<any> = fromEvent(
      this.button.nativeElement, 'click');
    myBtnObservable.subscribe((e) => console.log('button click 1'));
    myBtnObservable.subscribe((e) => console.log('button click 2'));

    class Producer {
      private myListeners: any = [];
      private n = 0;
      private id: any;

      addListener(listener: any) {
        this.myListeners.push(listener)
      }

      start() {
        this.id = setInterval(() => {
          this.n++;
          console.log('data from producer: ' + this.n);
          for (let listener of this.myListeners) {
            listener(this.n);
          }
        }, 1000);

      }

      stop() {
        clearInterval(this.id);
      }
    }

    let producer: Producer = new Producer();
    producer.start();

    setTimeout(() => {
      producer.addListener((n: any) => console.log('response from listener 1:', n))
      producer.addListener((n: any) => console.log('response from listener 2:', n))
    }, 4000);

    const hotObservable = new Observable(
      (observer: Observer<number>) => {
        producer.addListener((n:number) => observer.next(n));
      }
    );

    hotObservable.subscribe((n) =>{
      console.log("response from subscriber 1:", n)
    })
    
    hotObservable.subscribe((n) =>{
      console.log("response from subscriber 2:", n)
    })

  }
}
