import { Component } from '@angular/core';
import { LivrosService, Livro } from '../livros-service'


@Component({
   selector: 'app-listar-livro',
   imports: [],
   templateUrl: './listar-livro.html',
   styleUrl: './listar-livro.css'
})

export class ListarLivro {
   livros: Livro[];

   constructor(private livrosService : LivrosService) {
      this.livros = this.livrosService.listar();
   }

   remover(index: number): void {
      this.livrosService.remover(index);
      this.livros = this.livrosService.listar(); 
   }
}
