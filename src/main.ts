import { bootstrapApplication } from '@angular/platform-browser';
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorSwitcherComponent } from './app/color-switcher/color-switcher.component';
import { ColorService } from './color.service';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, ColorSwitcherComponent],
  template: `
    <app-color-switcher></app-color-switcher>
    The result of mixing ?blue? and ?current? is:
    <span style="background-color:">???</span>
  `,
})
export class App implements OnInit {
  colorService = inject(ColorService);

  ngOnInit() {
    // Render the blue color name instead of ?blue?
    // Render the `currentColor` name instead of ?current?
    // Set the <span> background color based on the mixed color code
    // Render the mixed color name instead of ???
  }
}

bootstrapApplication(App);
