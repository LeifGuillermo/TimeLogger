import { ClockService } from './../../shared/services/clock/clock.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-time-entry',
  templateUrl: './time-entry.component.html',
  styleUrls: ['./time-entry.component.scss']
})
export class TimeEntryComponent implements OnInit, OnDestroy {
  // TODO: Bind inputs to form-control values here
  // timeStartFormControl: FormControl = new FormControl('');
  // timeEndFormControl: FormControl = new FormControl('');
  // ticketNumberFormControl: FormControl = new FormControl('');

  public currentTime: Date = new Date();

  private destroyNotify$: Subject<void> = new Subject<void>();

  constructor(private clockService: ClockService) {}

  ngOnInit() {
    this.clockService.currentTime.pipe(takeUntil(this.destroyNotify$)).subscribe(time => {
      this.currentTime = time;
    });
  }

  ngOnDestroy() {
    this.destroyNotify$.next();
    this.destroyNotify$.complete();
  }
}
