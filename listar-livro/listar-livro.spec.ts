import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarLivro } from './listar-livro';

describe('ListarLivro', () => {
  let component: ListarLivro;
  let fixture: ComponentFixture<ListarLivro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarLivro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarLivro);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
