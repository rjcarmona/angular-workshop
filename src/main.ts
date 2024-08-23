import { bootstrapApplication } from '@angular/platform-browser';
import { Component, computed, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, of } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: ` <h1>{{ message() }}</h1> `,
})
export class App {
  greeting$: Observable<string> = of('Hello');
  name$: Observable<string> = of('Peter');
  greeting = toSignal(this.greeting$);
  name = toSignal(this.name$);
  message = computed(() => `${this.greeting()} ${this.name()}`);
}

bootstrapApplication(App);
