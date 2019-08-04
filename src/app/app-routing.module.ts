import { SpecificTimeEntryComponent } from './time-entry/specific-time-entry/specific-time-entry.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimeEntryComponent } from './time-entry/time-entry.component';
import { TimeLengthEntryComponent } from './time-entry/time-length-entry/time-length-entry.component';

const routes: Routes = [
  {
    path: 'time-entry',
    component: TimeEntryComponent,
    children: [
      { path: 'manual', component: SpecificTimeEntryComponent },
      { path: 'time-length', component: TimeLengthEntryComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
