import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeEntryComponent } from './time-entry.component';
import { NgModule } from '@angular/core';

describe('TimeEntryComponent', () => {
  let component: TimeEntryComponent;
  let fixture: ComponentFixture<TimeEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TimeEntryComponent],
      imports: [BsDatepickerModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
