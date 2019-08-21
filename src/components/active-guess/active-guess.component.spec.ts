import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveGuessComponent } from './active-guess.component';

describe('ActiveGuessComponent', () => {
  let component: ActiveGuessComponent;
  let fixture: ComponentFixture<ActiveGuessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveGuessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveGuessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
