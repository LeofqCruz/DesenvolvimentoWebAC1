import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

type Content = { titulo: string, autor: string, dataPublicacao: string, conteudo: string, numeroCurtidas: number,novoComentario: string, listaComentarios: string[] }

@Component({
   selector: 'app-ac1',
   imports: [FormsModule, CommonModule],
   templateUrl: './ac1.html',
   styleUrl: './ac1.css'
})
export class AC1 {
   listaComentarios: string[] = []
   numeroCurtidas:number = 0;
   conteudos: Content[] = [
      { titulo: 'Sem Anistia', autor: 'Carmen Lúcia', dataPublicacao: '11/09/2025', conteudo: 'preso', numeroCurtidas: 0, novoComentario: '', listaComentarios: [] },
      { titulo: 'Taokey', autor: 'Pocketnaro', dataPublicacao: '11/09/2025', conteudo: 'preso', numeroCurtidas: 0, novoComentario: '', listaComentarios: [] },
      { titulo: 'Vai Xandão', autor: 'Manoel Jones', dataPublicacao: '11/09/2025', conteudo: 'liberdade canta?', numeroCurtidas: 0, novoComentario: '', listaComentarios: [] }
   ];   

   addCurtida(conteudo: any){
      conteudo.numeroCurtidas++;
   }

   comentar(conteudo: any){
      if(conteudo.novoComentario.trim()){
         conteudo.listaComentarios.push(conteudo.novoComentario);
         conteudo.novoComentario= ''
      }
   }


}





//   comentarPost(post: any) {
//     if (post.novoComentario.trim()) {
//       post.comentarios.push(post.novoComentario);
//       post.novoComentario = '';
//     }
//   }

