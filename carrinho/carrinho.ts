import { Component } from '@angular/core';

type Produto = { id: number, nome: string, preco: number, estoque?: number };


@Component({
   selector: 'app-carrinho',
   imports: [],
   templateUrl: './carrinho.html',
   styleUrl: './carrinho.css'
})

export class Carrinho {
   carrinho: Produto[] = [];
   valorCarrinho: number = 0;
   produto: Produto[] = [
      {
         id: 1,
         nome: 'Abajur',
         preco: 15.50,
         estoque: 15
      },
      {
         id: 2,
         nome: 'Bola',
         preco: 27.50,
         estoque: 36
      }
   ]

   adicionarAoCarrinho(produto: Produto) {
      this.carrinho.push(produto);
      this.valorCarrinho += produto.preco;
   }

}