import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimeEntryComponent } from './time-entry/time-entry.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { TimeEntryListElementComponent } from './time-entry/time-entry-list-element/time-entry-list-element.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TicketComponent } from './ticket/ticket.component';
import { CurrentTimeEntryComponent } from './time-entry/current-time-entry/current-time-entry.component';
import { SpecificTimeEntryComponent } from './time-entry/specific-time-entry/specific-time-entry.component';
import { TimeLengthEntryComponent } from './time-entry/time-length-entry/time-length-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    TimeEntryComponent,
    TimeEntryListElementComponent,
    TicketComponent,
    CurrentTimeEntryComponent,
    SpecificTimeEntryComponent,
    TimeLengthEntryComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    TimepickerModule.forRoot(),
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
