import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComagneDetailsComponent } from './comagne-details.component';

describe('ComagneDetailsComponent', () => {
  let component: ComagneDetailsComponent;
  let fixture: ComponentFixture<ComagneDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComagneDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComagneDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
