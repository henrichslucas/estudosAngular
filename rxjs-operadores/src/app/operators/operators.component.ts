import { Component, OnInit } from '@angular/core';
import { delay, filter, from, fromEvent, interval, map, Observable, Subscription, take, tap } from 'rxjs';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css']
})
export class OperatorsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('RXJS OPERATORS');
  }

  mapClick() {
    console.log('Map in use');
    const data: number[] = [1, 2, 3, 4, 5, 6, 7];
    console.log('Original array:' + data);

    from(data)
      .pipe(
        map((i) => i),
        map((i) => i * 2),
        delay(2000)
      )
      .subscribe((i) => console.log(i));
  }

  filterClick() {
    console.log('Filter in use');
    const data: number[] = [10, 20, 30, 40, 50, 60, 70];
    console.log('Original array:' + data);

    from(data)
      .pipe(
        filter((i) => i % 2 == 0),
        delay(2000),
      )
      .subscribe((i) => console.log(i));
  }

  tapClick() {
    console.log('Tap in use');
    interval(1000)
      .pipe(
        tap(i => console.log('Before filter: ', i)),
        filter((i) => i % 2 == 0),
        tap(i => console.log('After filter: ', i)),
        delay(2000)
      )
      .subscribe((i) => console.log('Actual data: ', i));
  }

  takeClick(){
    const observable = new Observable((obs) =>{
      let i;
      for(i=0;i<20;i++){
        setTimeout(()=>obs.next(Math.floor(Math.random()*100)),i*100);
      }
      setTimeout(() => obs.complete(),i*100);
    });

    const s: Subscription = observable
      .pipe(
        tap((i)=>console.log("Valor no tap: ",i)),
        take(10)
      )
      .subscribe((v)=>console.log('Output: ',v));
  }

}
