import { Injectable } from '@angular/core';

export interface Aluno {
   nome: string;
   idade: number;
}

@Injectable({
   providedIn: 'root'
})
export class AlunoService {
   private alunos = [
      { nome: 'Laís', idade: 19 },
      { nome: 'Mauro', idade: 18 },
      { nome: 'Cléber', idade: 19 },
   ]

   listar(): Aluno[] {
      return this.alunos;
   }
}
