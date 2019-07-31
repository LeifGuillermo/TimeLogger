import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeEntryListElementComponent } from './time-entry-list-element.component';

describe('TimeEntryListElementComponent', () => {
  let component: TimeEntryListElementComponent;
  let fixture: ComponentFixture<TimeEntryListElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TimeEntryListElementComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeEntryListElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
