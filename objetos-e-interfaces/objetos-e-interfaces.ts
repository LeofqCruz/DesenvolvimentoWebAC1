import { Component } from '@angular/core';


interface Post {
   id: number,
   titulo: string,
   conteudo: string,
   autor: string,
   data: Date;
}
type Produto = { nome: string, preco: number, estoque?: number};

type Admin = { nome: string, nivel: number};
type User = { email: string };
type AdminUser = Admin & User;

@Component({
   selector: 'app-objetos-e-interfaces',
   imports: [],
   templateUrl: './objetos-e-interfaces.html',
   styleUrl: './objetos-e-interfaces.css'
})
export class ObjetosEInterfaces {

   post: Post[] = [
      {
         id: 1,
         titulo: 'primeiro post',
         conteudo: 'Este é o conteúdo do post ...',
         autor: 'Ana',
         data: new Date()
      },
      {
         id: 2,
         titulo: 'segundo post',
         conteudo: 'Este é o conteúdo do  segundo post ...',
         autor: 'Maria',
         data: new Date()
      }
   ];

   prod: Produto = { nome: 'Camiseta', preco: 29.99, estoque: 100};

   user: AdminUser = {
      nome: 'Leo',
      nivel: 5,
      email: 'teste@gmaiil.com'
   }

   // any: compila sempre, pode quebrar em runtime
   valorAny: any = 123;

   //unknow: 
   valorUnknown: unknown = 'string'

   // 


   setAny() {
      // pode receber qualquer coisa
      // this.valorAny = this.entrada; // string, number, etc
   }

   setUnknown() {
      // continua unknown 

   }







   // never: função que nunca retorna


   // generics
   // function identidade<T>(valor: T): T {
   //    return valor;
   // }

   // function primeiroElemento<T>(lista: T[]): T {

   }

// }
