import { Component } from '@angular/core';
import { CarrinhoService } from '../carrinho-service';

interface Item {
   nome: string;
   valor: number;
}
@Component({
   selector: 'app-add-itens',
   imports: [],
   templateUrl: './add-itens.html',
   styleUrl: './add-itens.css'
})
export class AddItens {
   constructor(public addItens: CarrinhoService){}
}
