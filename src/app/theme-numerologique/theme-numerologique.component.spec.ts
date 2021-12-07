import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ThemeNumerologiqueComponent } from './theme-numerologique.component';

describe('ThemeNumerologiqueComponent', () => {
  let component: ThemeNumerologiqueComponent;
  let fixture: ComponentFixture<ThemeNumerologiqueComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemeNumerologiqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeNumerologiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
