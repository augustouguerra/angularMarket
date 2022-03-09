import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  private count = new BehaviorSubject<number>(0);
  count$: Observable<number> = this.count.asObservable();


  constructor() { }


  setCount(value: number) {
    this.count.next(value);
  }

}
