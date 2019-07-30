import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClockService implements OnDestroy {
  private intervalTimer: number;
  private currentTimeBehaviorSubject: BehaviorSubject<Date> = new BehaviorSubject<Date>(new Date());

  public currentTime: Observable<Date> = this.currentTimeBehaviorSubject.asObservable();

  constructor() {
    this.intervalTimer = window.setInterval(
      function() {
        this.currentTimeBehaviorSubject.next(new Date());
      }.bind(this),
      1000
    );
  }

  ngOnDestroy() {
    clearInterval(this.intervalTimer);
    this.currentTimeBehaviorSubject.complete();
  }
}
