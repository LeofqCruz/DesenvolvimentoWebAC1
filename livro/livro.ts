import { Component } from '@angular/core';
import { LivrosService, Livro } from '../livros-service';
import { FormsModule } from '@angular/forms';



@Component({
   selector: 'app-livro',
   imports: [FormsModule],
   templateUrl: './livro.html',
   styleUrl: './livro.css'
})

export class Livros {
   livro: Livro = {nome: '', genero:'', numeroPaginas: 0};

   constructor(private livrosService : LivrosService) {}

   salvar(): void {
      this.livrosService.adicionar({...this.livro})
      this.livro = {nome:'', genero:'', numeroPaginas: 0}
   }
}
