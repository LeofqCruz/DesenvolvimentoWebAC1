import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjetosEInterfaces } from './objetos-e-interfaces';

describe('ObjetosEInterfaces', () => {
  let component: ObjetosEInterfaces;
  let fixture: ComponentFixture<ObjetosEInterfaces>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObjetosEInterfaces]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObjetosEInterfaces);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
