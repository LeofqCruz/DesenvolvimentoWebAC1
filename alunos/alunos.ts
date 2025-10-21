import { Component } from '@angular/core';
import { AlunoService } from '../aluno-service';

interface Aluno {
   nome: string,
   idade: number
}

@Component({
   selector: 'app-alunos',
   imports: [],
   templateUrl: './alunos.html',
   styleUrl: './alunos.css'
})
export class Alunos {
   alunos: Aluno[] = [];

   constructor (private alunoService: AlunoService) {
         this.alunos = this.alunoService.listar();
      }
}
