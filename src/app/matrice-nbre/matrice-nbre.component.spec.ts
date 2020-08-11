import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatriceNbreComponent } from './matrice-nbre.component';

describe('MatriceNbreComponent', () => {
  let component: MatriceNbreComponent;
  let fixture: ComponentFixture<MatriceNbreComponent>;

  beforeEach(async(() => {
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
