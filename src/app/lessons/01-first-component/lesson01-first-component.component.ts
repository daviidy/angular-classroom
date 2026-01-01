import { Component } from '@angular/core';

@Component({
  selector: 'app-lesson01-first-component',
  standalone: true,
  template: `
    <section class="card">
      <h1>Lesson 01 – First Component</h1>
      <p>This is your first standalone Angular component.</p>
      <p class="hint">Task: change the title and add a second paragraph about yourself.</p>
    </section>
  `,
  styles: [
    `
      .card{border:1px solid #e5e7eb;border-radius:12px;padding:16px;}
      .hint{color:#6b7280;}
    `
  ]
})
export class Lesson01FirstComponent {}
