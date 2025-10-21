import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemaClaro } from './tema-claro';

describe('TemaClaro', () => {
  let component: TemaClaro;
  let fixture: ComponentFixture<TemaClaro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemaClaro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemaClaro);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
