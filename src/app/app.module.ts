import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimeEntryComponent } from './time-entry/time-entry.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';

@NgModule({
  declarations: [AppComponent, TimeEntryComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, TimepickerModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
