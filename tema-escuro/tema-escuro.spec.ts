import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemaEscuro } from './tema-escuro';

describe('TemaEscuro', () => {
  let component: TemaEscuro;
  let fixture: ComponentFixture<TemaEscuro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemaEscuro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemaEscuro);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
