import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NbreActifComponent } from './nbre-actif.component';

describe('NbreActifComponent', () => {
  let component: NbreActifComponent;
  let fixture: ComponentFixture<NbreActifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NbreActifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NbreActifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
