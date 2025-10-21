import { Component } from '@angular/core';
import { CadastroService } from '../cadastro-service'
import { FormsModule } from '@angular/forms';

interface Cadastro {
   nome: string,
   tipo: string,
   preco: number
}

@Component({
   selector: 'app-produto',
   imports: [FormsModule],
   templateUrl: './produto.html',
   styleUrl: './produto.css'
})
export class Produto {
   produto: Cadastro = {nome: '', tipo:'', preco: 0};

   constructor (private cadastroService: CadastroService){}

   salvar(): void {
      this.cadastroService.adicionar({...this.produto})
      this.produto = {nome: '', tipo:'', preco: 0};
   }
   
   // produtos: Cadastro[] = [];

   // constructor (private cadastroService: CadastroService) {
   //    this.produtos = this.cadastroService.listar();
   // }
}
