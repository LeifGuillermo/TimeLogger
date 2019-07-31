import { ClockService } from './../../shared/services/clock/clock.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
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
  public ticketNumber: string; // TODO: Add ticket number to list.
  public comments: string;
  public todaysDate: Date = new Date();

  private timeEntryList: { ticketNumber: string; date: Date; comments: string }[];

  private destroyNotify$: Subject<void> = new Subject<void>();

  constructor(private clockService: ClockService) {
    this.timeEntryList = [];
  }

  ngOnInit() {
    this.clockService.currentTime.pipe(takeUntil(this.destroyNotify$)).subscribe(time => {
      this.currentTime = time;
    });
  }

  ngOnDestroy() {
    this.destroyNotify$.next();
    this.destroyNotify$.complete();
  }

  public addCurrentTimeEntry(): void {
    console.log('adding time entry', this.timeEntryList);
    this.timeEntryList.push({ ticketNumber: this.ticketNumber, date: this.currentTime, comments: this.comments });
  }
}
