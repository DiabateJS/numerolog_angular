import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NbresManquantsComponent } from './nbres-manquants.component';

describe('NbresManquantsComponent', () => {
  let component: NbresManquantsComponent;
  let fixture: ComponentFixture<NbresManquantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NbresManquantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NbresManquantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
