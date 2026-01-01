import { Routes } from '@angular/router';
import { Lesson01FirstComponent } from './lessons/01-first-component/lesson01-first-component.component';
import { Lesson02DataBinding } from './lessons/02-data-binding/lesson02-data-binding.component';
import { Lesson03ControlFlow } from './lessons/03-control-flow/lesson03-control-flow.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'lessons/01' },
  { path: 'lessons/01', component: Lesson01FirstComponent },
  { path: 'lessons/02', component: Lesson02DataBinding },
  { path: 'lessons/03', component: Lesson03ControlFlow },
  { path: '**', redirectTo: 'lessons/01' }
];
