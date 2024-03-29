import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NbresDominantsComponent } from './nbres-dominants.component';

describe('NbresDominantsComponent', () => {
  let component: NbresDominantsComponent;
  let fixture: ComponentFixture<NbresDominantsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NbresDominantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NbresDominantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
