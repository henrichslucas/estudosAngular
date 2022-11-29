import { Component, OnInit } from '@angular/core';
import { ConnectableObservable, Observable, Observer, publish, refCount, Subject } from 'rxjs';

@Component({
  selector: 'app-hot-observables',
  templateUrl: './hot-observables.component.html',
  styleUrls: ['./hot-observables.component.css']
})
export class HotObservablesComponent implements OnInit {
  n: number = 0;
  n1: number = 0;
  n2: number = 0;
  s1: string = 'Initializing...';
  s2: string = 'Initializing...';

  myObservable!: Observable<number>;
  constructor() { }

  ngOnInit(): void {
    this.myObservable = new Observable(
      (observer: Observer<number>) => {
        let i: number = 0;
        setInterval(() => {
          i++;
          (i == 10) ? observer.complete() : observer.next(i);
        }, 1000)
      }
    );
    //this.usingSubjects();
    this.usingPublish();
  }
  usingPublish(){
    const multicasted: ConnectableObservable<number> = this.myObservable.pipe(publish()) as ConnectableObservable<number>;
    multicasted.connect();
    const subject = new Subject<number>();
    this.myObservable.subscribe(subject)


    this.s1 = 'waiting...';
    setTimeout(() => {

      subject.subscribe((n) => {
        this.n1 = n;
        this.s1 = 'OK';
      })
    }, 2000);

    this.s2 = 'waiting...';
    setTimeout(() => {
      multicasted.subscribe((n) => {
        this.n2 = n;
        this.s2 = 'OK';
      })
    }, 4000);
  }
}
