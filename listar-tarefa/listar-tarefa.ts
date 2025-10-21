import { Component } from '@angular/core';
import { TarefaService, Tarefa } from '../tarefa-service'

@Component({
   selector: 'app-listar-tarefa',
   imports: [],
   templateUrl: './listar-tarefa.html',
   styleUrl: './listar-tarefa.css'
})
export class ListarTarefa {
   tarefas: Tarefa[];
   contador: number = 0;
   
   constructor(private tarefaService: TarefaService) {
      this.tarefas = this.tarefaService.listar();
      this.contador = this.tarefas.length;
   }
   
   remover(index: number): void {
      this.tarefaService.remover(index);
      this.tarefas = this.tarefaService.listar();
      this.contador = this.tarefas.length;
   }

   marcarConcluida(index: number): void {
      this.tarefas[index].concluido = true;
   }

}

