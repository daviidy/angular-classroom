import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Lesson03ControlFlow } from './lesson03-control-flow.component';

describe('Lesson03ControlFlow', () => {
  it('toggles ngIf content', async () => {
    await TestBed.configureTestingModule({ imports: [Lesson03ControlFlow] }).compileComponents();
    const fixture = TestBed.createComponent(Lesson03ControlFlow);
    fixture.detectChanges();

    expect(fixture.debugElement.query(By.css('.details'))).toBeNull();
    const btn = fixture.debugElement.query(By.css('button')).nativeElement as HTMLButtonElement;
    btn.click();
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('.details'))).not.toBeNull();
  });

  it('renders list items via ngFor', async () => {
    await TestBed.configureTestingModule({ imports: [Lesson03ControlFlow] }).compileComponents();
    const fixture = TestBed.createComponent(Lesson03ControlFlow);
    fixture.detectChanges();

    const items = fixture.debugElement.queryAll(By.css('li'));
    expect(items.length).toBe(3);
    expect(items[0].nativeElement.textContent).toContain('1.');
  });
});
