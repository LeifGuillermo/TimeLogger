import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificTimeEntryComponent } from './specific-time-entry.component';

describe('SpecificTimeEntryComponent', () => {
  let component: SpecificTimeEntryComponent;
  let fixture: ComponentFixture<SpecificTimeEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecificTimeEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecificTimeEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
