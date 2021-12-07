import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NumCoupleComponent } from './num-couple.component';

describe('NumCoupleComponent', () => {
  let component: NumCoupleComponent;
  let fixture: ComponentFixture<NumCoupleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NumCoupleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumCoupleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
