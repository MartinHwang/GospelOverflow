import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VdieoDetailComponent } from './vdieo-detail.component';

describe('VdieoDetailComponent', () => {
  let component: VdieoDetailComponent;
  let fixture: ComponentFixture<VdieoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VdieoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VdieoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
