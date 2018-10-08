import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventDatailComponent } from './event-datail.component';

describe('EventDatailComponent', () => {
  let component: EventDatailComponent;
  let fixture: ComponentFixture<EventDatailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventDatailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventDatailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
