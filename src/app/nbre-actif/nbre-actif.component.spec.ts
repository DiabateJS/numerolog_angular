import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NbreActifComponent } from './nbre-actif.component';

describe('NbreActifComponent', () => {
  let component: NbreActifComponent;
  let fixture: ComponentFixture<NbreActifComponent>;

  beforeEach(waitForAsync(() => {
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
