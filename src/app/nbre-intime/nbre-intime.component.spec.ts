import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NbreIntimeComponent } from './nbre-intime.component';

describe('NbreIntimeComponent', () => {
  let component: NbreIntimeComponent;
  let fixture: ComponentFixture<NbreIntimeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NbreIntimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NbreIntimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
