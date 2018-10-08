import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupMemberComponent } from './popup-member.component';

describe('PopupMemberComponent', () => {
  let component: PopupMemberComponent;
  let fixture: ComponentFixture<PopupMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
