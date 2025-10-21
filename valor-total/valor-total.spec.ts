import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValorTotal } from './valor-total';

describe('ValorTotal', () => {
  let component: ValorTotal;
  let fixture: ComponentFixture<ValorTotal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValorTotal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValorTotal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
