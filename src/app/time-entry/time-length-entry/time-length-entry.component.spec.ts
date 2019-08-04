import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeLengthEntryComponent } from './time-length-entry.component';

describe('TimeLengthEntryComponent', () => {
  let component: TimeLengthEntryComponent;
  let fixture: ComponentFixture<TimeLengthEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeLengthEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeLengthEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
