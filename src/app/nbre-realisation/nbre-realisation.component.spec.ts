import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NbreRealisationComponent } from './nbre-realisation.component';

describe('NbreRealisationComponent', () => {
  let component: NbreRealisationComponent;
  let fixture: ComponentFixture<NbreRealisationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NbreRealisationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NbreRealisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
