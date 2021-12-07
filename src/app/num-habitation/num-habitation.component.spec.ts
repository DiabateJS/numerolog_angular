import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NumHabitationComponent } from './num-habitation.component';

describe('NumHabitationComponent', () => {
  let component: NumHabitationComponent;
  let fixture: ComponentFixture<NumHabitationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NumHabitationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumHabitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
