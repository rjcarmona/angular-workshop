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
    The selected color is:
    <span style="background-color: ">???</span>
  `,
})
export class App implements OnInit {
  // Dependency Injection
  // constructor(private colorServiceOld: ColorService) {
  //  ...
  // }
  colorService = inject(ColorService);

  ngOnInit() {
    // Render the selected color name from the dropdown instead of ???
    // Set the <span> background color based on the selected color code
  }
}

bootstrapApplication(App);
