import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Carritosenales } from './carritosenales';

describe('Carritosenales', () => {
  let component: Carritosenales;
  let fixture: ComponentFixture<Carritosenales>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Carritosenales],
    }).compileComponents();

    fixture = TestBed.createComponent(Carritosenales);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
