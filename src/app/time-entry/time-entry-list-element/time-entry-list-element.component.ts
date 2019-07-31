import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-time-entry-list-element',
  templateUrl: './time-entry-list-element.component.html',
  styleUrls: ['./time-entry-list-element.component.scss']
})
export class TimeEntryListElementComponent implements OnInit {
  @Input() ticketNumber: string;
  @Input() date: Date;
  @Input() comments: string;

  constructor() {}

  ngOnInit() {}
}
