import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivMakerComponent } from './div-maker.component';

describe('DivMakerComponent', () => {
  let component: DivMakerComponent;
  let fixture: ComponentFixture<DivMakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DivMakerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DivMakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
