import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentTimeEntryComponent } from './current-time-entry.component';

describe('CurrentTimeEntryComponent', () => {
  let component: CurrentTimeEntryComponent;
  let fixture: ComponentFixture<CurrentTimeEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentTimeEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentTimeEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
