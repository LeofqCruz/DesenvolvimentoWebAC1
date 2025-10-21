import { Injectable } from '@angular/core';

export interface Cadastro {
   nome: string,
   tipo: string,
   preco: number
}

@Injectable({
   providedIn: 'root'
})

export class CadastroService {
   private produtos = [
      { nome: 'Bombril', tipo: 'Limpeza', preco: 3.99},
      { nome: 'Refrigerante', tipo: 'Bebida', preco: 8.99},
      { nome: 'Picolé', tipo: 'Doce', preco: 2.99},
   ]

   listar(): Cadastro[] {
      return this.produtos;
   }

   adicionar(produto: Cadastro): void {
      this.produtos.push(produto);
   }

   remover(index: number): void {
      this.produtos.splice(index, 1)
   }
}
