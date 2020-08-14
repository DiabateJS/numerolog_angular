import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumEntrepriseComponent } from './num-entreprise.component';

describe('NumEntrepriseComponent', () => {
  let component: NumEntrepriseComponent;
  let fixture: ComponentFixture<NumEntrepriseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumEntrepriseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumEntrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
