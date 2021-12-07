import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NumEntrepriseComponent } from './num-entreprise.component';

describe('NumEntrepriseComponent', () => {
  let component: NumEntrepriseComponent;
  let fixture: ComponentFixture<NumEntrepriseComponent>;

  beforeEach(waitForAsync(() => {
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
