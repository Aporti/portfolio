import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoplurComponent } from './doplur.component';

describe('DoplurComponent', () => {
  let component: DoplurComponent;
  let fixture: ComponentFixture<DoplurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoplurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoplurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
