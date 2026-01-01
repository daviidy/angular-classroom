import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lesson02-data-binding',
  standalone: true,
  imports: [FormsModule],
  template: `
    <section class="card">
      <h1>Lesson 02 – Data Binding</h1>

      <h2>Interpolation</h2>
      <p>Hello, {{ name }}!</p>

      <h2>Property binding</h2>
      <img [src]="avatarUrl" [alt]="'Avatar for ' + name" width="96" height="96" />

      <h2>Event binding</h2>
      <button type="button" (click)="increment()">Clicked {{ count }} times</button>

      <h2>Two-way binding</h2>
      <label>Update name: <input [(ngModel)]="name" /></label>
    </section>
  `,
  styles: [
    `
      .card{display:flex;flex-direction:column;gap:12px;border:1px solid #e5e7eb;border-radius:12px;padding:16px;}
      button{width:fit-content;padding:8px 12px;border-radius:10px;border:1px solid #e5e7eb;background:#111827;color:white;}
      button:hover{filter:brightness(0.95);}
      input{padding:8px;border-radius:8px;border:1px solid #e5e7eb;}
      img{border-radius:999px;border:1px solid #e5e7eb;}
    `
  ]
})
export class Lesson02DataBinding {
  name = 'Student';
  count = 0;
  avatarUrl = 'https://placehold.co/96x96';

  increment() {
    this.count += 1;
  }
}
