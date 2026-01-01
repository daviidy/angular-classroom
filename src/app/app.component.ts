import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  template: `
    <header class="topbar">
      <div class="brand">Angular Classroom</div>
      <nav class="nav">
        <a routerLink="/lessons/01">Lesson 01</a>
        <a routerLink="/lessons/02">Lesson 02</a>
        <a routerLink="/lessons/03">Lesson 03</a>
      </nav>
    </header>
    <main class="page"><router-outlet /></main>
  `,
  styles: [
    `
      .topbar{display:flex;align-items:center;justify-content:space-between;padding:12px 16px;border-bottom:1px solid #eee;}
      .brand{font-weight:700;}
      .nav{display:flex;gap:12px;}
      .nav a{text-decoration:none;padding:6px 10px;border-radius:8px;}
      .nav a:hover{background:#f3f4f6;}
      .page{padding:16px;max-width:900px;margin:0 auto;}
    `
  ]
})
export class AppComponent {}
