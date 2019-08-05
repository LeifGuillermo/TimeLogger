import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeLengthEntryComponent } from './time-length-entry.component';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';

describe('TimeLengthEntryComponent', () => {
  let component: TimeLengthEntryComponent;
  let fixture: ComponentFixture<TimeLengthEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TimeLengthEntryComponent],
      imports: [TimepickerModule]
    }).compileComponents();
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
