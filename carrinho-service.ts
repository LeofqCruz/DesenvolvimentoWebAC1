import { Injectable } from '@angular/core';

export interface Item {
   nome: string;
   valor: number;
}

export interface Carrinho {
   qntTotal: number;
   itens: Item[];
}
@Injectable({
   providedIn: 'root'
})
export class CarrinhoService {
   private carrinho: Carrinho = {
      qntTotal: 0,
      itens: []
   }

   addItem(item: Item) {
      this.carrinho.itens.push(item)
      this.carrinho.qntTotal++;
   }

   somar(): number {
      let soma = 0;
      for (let item of this.carrinho.itens) {
         soma += item.valor
      }
      return soma;
   }

   getCarrinho(): Carrinho {
      return this.carrinho;
   }
}
