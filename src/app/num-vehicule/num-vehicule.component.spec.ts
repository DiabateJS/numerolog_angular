import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumVehiculeComponent } from './num-vehicule.component';

describe('NumVehiculeComponent', () => {
  let component: NumVehiculeComponent;
  let fixture: ComponentFixture<NumVehiculeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumVehiculeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumVehiculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
