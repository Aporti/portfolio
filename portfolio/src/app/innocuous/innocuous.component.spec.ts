import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnocuousComponent } from './innocuous.component';

describe('InnocuousComponent', () => {
  let component: InnocuousComponent;
  let fixture: ComponentFixture<InnocuousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InnocuousComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InnocuousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
