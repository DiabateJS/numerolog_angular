import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ConseilsNumerologComponent } from './conseils-numerolog.component';

describe('ConseilsNumerologComponent', () => {
  let component: ConseilsNumerologComponent;
  let fixture: ComponentFixture<ConseilsNumerologComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ConseilsNumerologComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConseilsNumerologComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
