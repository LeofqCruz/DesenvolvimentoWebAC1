import { Component } from '@angular/core';
import { CarrinhoService } from '../carrinho-service';

interface Item {
   nome: string;
   valor: number;
}
@Component({
   selector: 'app-valor-total',
   imports: [],
   templateUrl: './valor-total.html',
   styleUrl: './valor-total.css'
})
export class ValorTotal {
   constructor(public valorTotal: CarrinhoService){}
}
