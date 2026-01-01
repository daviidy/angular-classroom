import { Component } from '@angular/core';
import { NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';

@Component({
  selector: 'app-lesson03-control-flow',
  standalone: true,
  imports: [NgIf, NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault],
  template: `
    <section class="card">
      <h1>Lesson 03 – Control Flow</h1>

      <h2>*ngIf</h2>
      <button type="button" (click)="toggle()">Toggle Details</button>
      <p *ngIf="showDetails" class="details">Now you see me 👀</p>

      <h2>*ngFor</h2>
      <ul>
        <li *ngFor="let p of projects; let i = index">{{ i + 1 }}. {{ p }}</li>
      </ul>

      <h2>ngSwitch</h2>
      <div [ngSwitch]="level">
        <p *ngSwitchCase="'beginner'">Beginner track</p>
        <p *ngSwitchCase="'intermediate'">Intermediate track</p>
        <p *ngSwitchDefault>Pick a level</p>
      </div>
    </section>
  `,
  styles: [
    `
      .card{display:flex;flex-direction:column;gap:12px;border:1px solid #e5e7eb;border-radius:12px;padding:16px;}
      .details{color:#065f46;font-weight:600;}
      button{width:fit-content;padding:8px 12px;border-radius:10px;border:1px solid #e5e7eb;background:#2563eb;color:white;}
      button:hover{filter:brightness(0.95);}
      ul{margin:0;padding-left:18px;}
    `
  ]
})
export class Lesson03ControlFlow {
  showDetails = false;
  projects = ['Card UI', 'Todo List', 'API Dashboard'];
  level: 'beginner' | 'intermediate' | 'advanced' = 'beginner';

  toggle() {
    this.showDetails = !this.showDetails;
  }
}
