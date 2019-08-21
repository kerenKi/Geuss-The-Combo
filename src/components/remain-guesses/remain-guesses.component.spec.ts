import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemainGuessesComponent } from './remain-guesses.component';

describe('RemainGuessesComponent', () => {
  let component: RemainGuessesComponent;
  let fixture: ComponentFixture<RemainGuessesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemainGuessesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemainGuessesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
