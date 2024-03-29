import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NbreHereditaireComponent } from './nbre-hereditaire.component';

describe('NbreHereditaireComponent', () => {
  let component: NbreHereditaireComponent;
  let fixture: ComponentFixture<NbreHereditaireComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NbreHereditaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NbreHereditaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
