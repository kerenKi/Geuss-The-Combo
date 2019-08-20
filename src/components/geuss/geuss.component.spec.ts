import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeussComponent } from './geuss.component';

describe('GeussComponent', () => {
  let component: GeussComponent;
  let fixture: ComponentFixture<GeussComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeussComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeussComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
