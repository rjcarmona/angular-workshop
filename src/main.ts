import { bootstrapApplication } from '@angular/platform-browser';
import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { of, Subject, takeUntil } from 'rxjs';
import { CurrencySwitcherComponent } from './app/currency-switcher/currency-switcher.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, CurrencySwitcherComponent],
  template: `
    <h1>Hello {{ nameToRender }}</h1>
    <button (click)="updateValue('World!')">Update</button>
  `,
})
export class App implements OnInit, OnDestroy {
  // With Signals

  // nameToRender = signal('Angular');

  // <h1>Hello {{ nameToRender }}</h1>
  // <button (click)="updateValue('World!')">Update</button>

  // ---------------------------

  // With Observables

  name$ = of('Angular!');
  nameToRender = '';
  destroy$: Subject<boolean> = new Subject<boolean>();

  ngOnInit() {
    this.name$.pipe(takeUntil(this.destroy$)).subscribe((val) => {
      this.nameToRender = val;
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
  }

  updateValue(value: string) {
    this.name$.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.nameToRender = value;
    });
  }
}

bootstrapApplication(App);
