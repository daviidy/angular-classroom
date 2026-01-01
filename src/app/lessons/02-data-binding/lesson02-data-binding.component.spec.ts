import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Lesson02DataBinding } from './lesson02-data-binding.component';

describe('Lesson02DataBinding', () => {
  it('increments count when button clicked', async () => {
    await TestBed.configureTestingModule({ imports: [Lesson02DataBinding] }).compileComponents();
    const fixture = TestBed.createComponent(Lesson02DataBinding);
    fixture.detectChanges();

    const button = fixture.debugElement.query(By.css('button')).nativeElement as HTMLButtonElement;
    expect(button.textContent).toContain('0');
    button.click();
    fixture.detectChanges();
    expect(button.textContent).toContain('1');
  });

  it('updates greeting when name changes via ngModel', async () => {
    await TestBed.configureTestingModule({ imports: [Lesson02DataBinding] }).compileComponents();
    const fixture = TestBed.createComponent(Lesson02DataBinding);
    fixture.detectChanges();

    const input = fixture.debugElement.query(By.css('input')).nativeElement as HTMLInputElement;
    input.value = 'Amina';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect((fixture.nativeElement as HTMLElement).textContent).toContain('Hello, Amina!');
  });
});
