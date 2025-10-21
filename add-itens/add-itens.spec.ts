import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddItens } from './add-itens';

describe('AddItens', () => {
  let component: AddItens;
  let fixture: ComponentFixture<AddItens>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddItens]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddItens);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
