import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MatriceNbreComponent } from './matrice-nbre.component';

describe('MatriceNbreComponent', () => {
  let component: MatriceNbreComponent;
  let fixture: ComponentFixture<MatriceNbreComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MatriceNbreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatriceNbreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
