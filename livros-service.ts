import { Injectable } from '@angular/core';

export interface Livro {
   nome: string,
   genero: string,
   numeroPaginas: number,
}

@Injectable({
   providedIn: 'root'
})

export class LivrosService {
   private livros = [
      {nome: 'A maldição dos Blake', genero: 'Terror', numeroPaginas: 317},
      {nome: 'O cão dos Baskerville', genero: 'Suspense', numeroPaginas: 485},
      {nome: 'O Labirinto do Fauno', genero: 'Fantasia', numeroPaginas: 932}
   ]

   listar(): Livro[] {
      return this.livros
   }

   adicionar(livro: Livro): void {
      this.livros.push(livro)
   }

   remover(index: number): void {
      this.livros.splice(index, 1)
   }
}
