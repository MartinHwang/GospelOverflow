import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklytaskComponent } from './weeklytask.component';

describe('WeeklytaskComponent', () => {
  let component: WeeklytaskComponent;
  let fixture: ComponentFixture<WeeklytaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeeklytaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklytaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
