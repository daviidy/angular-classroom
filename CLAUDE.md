# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **GitHub Classroom template** for teaching Angular progressively through structured lessons. Students work through numbered lessons in `src/app/lessons/` while the core infrastructure remains protected.

**Key constraint**: Students should only edit files in `src/app/lessons/**` and `src/app/shared/**` (when created). Core configuration files are protected via GitHub Classroom.

## Development Commands

### Setup
```bash
npm ci              # Install dependencies (use ci for reproducible installs)
npm start           # Start dev server (ng serve)
```

### Autograding Pipeline (CI)
These commands must all pass for GitHub Classroom autograding:
```bash
npm run lint        # ESLint on all .ts and .html files
npm test            # Karma + Jasmine in ChromeHeadless (no watch mode)
npm run build       # Production build
```

### Running Single Tests
```bash
npx ng test --include='**/lesson01*.spec.ts'
```

## Architecture

### Angular Version & Configuration
- **Angular 21** with standalone components (no NgModules)
- **TypeScript 5.5+** with strict mode enabled
- **Testing**: Jasmine + Karma with ChromeHeadless
- **Linting**: ESLint with Angular-specific rules + Prettier

### Lesson Structure Pattern

Each lesson follows this convention:

```
src/app/lessons/NN-topic-name/
├── lessonNN-topic-name.component.ts       # Component implementation
└── lessonNN-topic-name.component.spec.ts  # Unit tests
```

**Naming convention**:
- Folder: `NN-topic-name` (e.g., `01-first-component`)
- Component class: `LessonNNTopicName` (PascalCase)
- File names: `lessonNN-topic-name.component.ts` (kebab-case with prefix)

### Routing & Navigation

When adding a new lesson:

1. **Add route** in `src/app/app.routes.ts`:
   ```typescript
   import { LessonNNTopicName } from './lessons/NN-topic-name/lessonNN-topic-name.component';

   export const routes: Routes = [
     // ... existing routes
     { path: 'lessons/NN', component: LessonNNTopicName },
   ];
   ```

2. **Add nav link** in `src/app/app.component.ts`:
   ```typescript
   <a routerLink="/lessons/NN">Lesson NN</a>
   ```

### Component Pattern

All components use the **standalone component** API:

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-lessonNN-topic-name',
  standalone: true,
  imports: [/* other standalone components, directives, pipes */],
  template: `
    <section class="card">
      <h1>Lesson NN – Topic Name</h1>
      <!-- lesson content -->
    </section>
  `,
  styles: [`
    .card{border:1px solid #e5e7eb;border-radius:12px;padding:16px;}
  `]
})
export class LessonNNTopicName {}
```

### Testing Pattern

Tests use **TestBed** for component instantiation and **DOM queries** for verification:

```typescript
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { LessonNNComponent } from './lessonNN-component.component';

describe('LessonNNComponent', () => {
  it('description of what is being tested', async () => {
    await TestBed.configureTestingModule({
      imports: [LessonNNComponent]
    }).compileComponents();

    const fixture = TestBed.createComponent(LessonNNComponent);
    fixture.detectChanges();

    // Use By.css() for queries
    const element = fixture.debugElement.query(By.css('.selector'));
    expect(element.nativeElement.textContent).toContain('expected text');
  });
});
```

**Testing requirements**:
- Must be **deterministic** (no randomness, timeouts, or flaky assertions)
- Verify **DOM output**, **event handling**, and **state updates**
- Use `By.css()` for selector queries
- Always call `fixture.detectChanges()` after state changes

## Protected Files

Do **not** modify these files unless explicitly requested (they are protected in GitHub Classroom):

- `angular.json`
- `package.json` / `package-lock.json`
- `tsconfig*.json`
- `karma.conf.js`
- `.eslintrc.json`
- `.prettierrc`
- `.editorconfig`
- `.github/**`

## Creating New Lessons

When the teacher requests a new lesson (e.g., "Create a lesson on Angular signals"):

1. **Create lesson folder and files**:
   ```bash
   src/app/lessons/NN-topic-name/
   ```

2. **Implement the component** with a small, practical UI task that demonstrates the concept

3. **Write deterministic unit tests** that verify the learning objective

4. **Wire up routing**:
   - Import and add route in `app.routes.ts`
   - Add navigation link in `app.component.ts`

5. **Verify CI passes**:
   ```bash
   npm run lint && npm test && npm run build
   ```

6. **Summarize changes**: List all files created/modified

## Common Angular Topics for Lessons

Typical lesson topics in this curriculum:
- Component basics & templates
- Data binding (interpolation, property, event, two-way)
- Control flow (@if, @for, @switch)
- Component communication (@Input, @Output)
- Lifecycle hooks (OnInit, OnDestroy, etc.)
- Services & dependency injection
- Pipes (built-in and custom)
- Router & navigation
- Observables & RxJS
- HTTP client & interceptors
- Forms (reactive & template-driven)
- Directives (attribute & structural)
- Signals (Angular's new reactivity model)
- Internationalization (i18n)
