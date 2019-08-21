import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttemptedGuessComponent } from './attempted-guess.component';

describe('AttemptedGuessComponent', () => {
  let component: AttemptedGuessComponent;
  let fixture: ComponentFixture<AttemptedGuessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttemptedGuessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttemptedGuessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
