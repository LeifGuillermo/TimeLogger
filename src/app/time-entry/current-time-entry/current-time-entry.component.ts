import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-current-time-entry',
  templateUrl: './current-time-entry.component.html',
  styleUrls: ['./current-time-entry.component.scss']
})
export class CurrentTimeEntryComponent implements OnInit {
  @Input() public currentTime: Date;
  @Output() public addCurrentTimeEvent: EventEmitter<void> = new EventEmitter<void>();

  constructor() {}

  ngOnInit() {}

}
