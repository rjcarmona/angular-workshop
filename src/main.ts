import { bootstrapApplication } from '@angular/platform-browser';
import { Component, computed, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>{{ message() }}</h1>
    <button (click)="name.set('Pedro!')">Update name to Pedro</button>
    <button (click)="greeting.set('Hola!')">Update greeting to Hola</button>
    <button (click)="greeting.set('Hoi!')">Update greeting to Hoi</button>
  `,
})
export class App {
  greeting = signal('Hello');
  name = signal('Peter');
  message = computed(() => `${this.greeting()} ${this.name()}`);

  constructor() {
    effect(() => console.log(`The ${this.message()} is changing!`));
  }
}

bootstrapApplication(App);
