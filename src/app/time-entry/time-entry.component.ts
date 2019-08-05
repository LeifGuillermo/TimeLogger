import { ClockService } from './../../shared/services/clock/clock.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { TimeEntryService, TicketTimeEntry, TimeEntryTicketState } from './time-entry.service';
import { ActivatedRoute } from '@angular/router';

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
  public bsValue = new Date();

  public currentTime: Date = new Date();
  public ticketNumber: string;
  public comments: string;
  public todaysDate: Date = new Date();

  public displayEntryToolCard = false;

  private timeEntryList: TicketTimeEntry[];

  private destroyNotify$: Subject<void> = new Subject<void>();

  private currentRoute: string;

  constructor(
    private clockService: ClockService,
    private timeEntryService: TimeEntryService,
    private activatedRoute: ActivatedRoute
  ) {
    this.timeEntryList = [];
  }

  ngOnInit() {
    this.clockService.currentTime.pipe(takeUntil(this.destroyNotify$)).subscribe(time => {
      this.currentTime = time;
    });
    this.timeEntryService.currentTicketState$
      .pipe(takeUntil(this.destroyNotify$))
      .subscribe((updatedTicketState: TimeEntryTicketState) => {
        if (this.ticketNumber) {
          this.timeEntryList.push(updatedTicketState[this.ticketNumber]);
        }
      });

    //TODO: Currently getting route and determining whether to open/close the tool card if a link is clicked.
    console.log(this.activatedRoute.snapshot.toString());
  }

  ngOnDestroy() {
    this.destroyNotify$.next();
    this.destroyNotify$.complete();
  }

  public toolcardLinkClicked() {
    // this.activatedRoute.
    this.displayEntryToolCard = true;
  }
  public clearEntryToolCard() {
    this.displayEntryToolCard = false;
  }

  public addCurrenTimeEventClicked() {
    this.addCurrentTimeEntry();
  }

  public addCurrentTimeEntry(): void {
    this.currentTime.setDate(this.bsValue.getDate());
    this.currentTime.setMonth(this.bsValue.getMonth());
    this.currentTime.setFullYear(this.bsValue.getFullYear());
    const newEntry: TicketTimeEntry = {
      ticketNumber: this.ticketNumber,
      isStartTime: this.timeEntryService.isCurrentTicketStartTime(this.ticketNumber),
      updateTime: this.currentTime,
      comments: this.comments
    };
    this.timeEntryService.updateTicketState(newEntry);
  }

  public activateClearAllEntries() {}
}
