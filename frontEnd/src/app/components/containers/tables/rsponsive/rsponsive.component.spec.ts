import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RsponsiveComponent } from './rsponsive.component';

describe('RsponsiveComponent', () => {
  let component: RsponsiveComponent;
  let fixture: ComponentFixture<RsponsiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RsponsiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RsponsiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
