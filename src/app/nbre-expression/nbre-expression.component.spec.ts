import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NbreExpressionComponent } from './nbre-expression.component';

describe('NbreExpressionComponent', () => {
  let component: NbreExpressionComponent;
  let fixture: ComponentFixture<NbreExpressionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NbreExpressionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NbreExpressionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
