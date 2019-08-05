import { TicketTimeEntry, TimeEntryService } from './../time-entry.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-time-entry-list-element',
  templateUrl: './time-entry-list-element.component.html',
  styleUrls: ['./time-entry-list-element.component.scss']
})
export class TimeEntryListElementComponent implements OnInit {
  public ticketEntry: TicketTimeEntry;

  constructor(private timeEntryService: TimeEntryService) {}

  public getClass(): string {
    return this.ticketEntry && this.ticketEntry.isStartTime ? 'ticketStartTime' : 'ticketEndTime';
  }

  ngOnInit() {
    this.ticketEntry = this.timeEntryService.getCurrentTicket();
  }
}
