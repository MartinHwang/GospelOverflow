import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlytaskComponent } from './monthlytask.component';

describe('MonthlytaskComponent', () => {
  let component: MonthlytaskComponent;
  let fixture: ComponentFixture<MonthlytaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlytaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlytaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
