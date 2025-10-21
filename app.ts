import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms'

@Component({
   selector: 'app-root',
   imports: [RouterOutlet, RouterLink, RouterLinkActive],
   templateUrl: './app.html',
   styleUrl: './app.css'
})
export class App {
   protected readonly title = signal('PrimeiroProjetoAngular');
}
