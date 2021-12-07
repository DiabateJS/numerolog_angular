import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CheminVieComponent } from './chemin-vie.component';

describe('CheminVieComponent', () => {
  let component: CheminVieComponent;
  let fixture: ComponentFixture<CheminVieComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CheminVieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheminVieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
