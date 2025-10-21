import { Component } from '@angular/core';
import { CadastroService, Cadastro } from '../cadastro-service';

@Component({
   selector: 'app-listar-produto',
   imports: [],
   templateUrl: './listar-produto.html',
   styleUrl: './listar-produto.css'
})

export class ListarProduto {
   produtos: Cadastro[];

   constructor(private cadastroService: CadastroService) {
      this.produtos = this.cadastroService.listar();
   }

   remover(index: number): void {
      this.cadastroService.remover(index);
      this.produtos = this.cadastroService.listar(); 
   }

}
