import { TestBed } from '@angular/core/testing';
import { Lesson01FirstComponent } from './lesson01-first-component.component';

describe('Lesson01FirstComponent', () => {
  it('renders the lesson title', async () => {
    await TestBed.configureTestingModule({ imports: [Lesson01FirstComponent] }).compileComponents();
    const fixture = TestBed.createComponent(Lesson01FirstComponent);
    fixture.detectChanges();
    expect((fixture.nativeElement as HTMLElement).textContent).toContain('Lesson 01');
  });
});
