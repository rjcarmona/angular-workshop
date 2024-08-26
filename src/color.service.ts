import { Injectable, signal } from '@angular/core';

const DEFAULT_COLORS = [
  { code: '#ff0000 ', name: 'red' },
  { code: '#FFFF00', name: 'yellow' },
  { code: '#0000FF', name: 'blue' },
];

@Injectable({
  providedIn: 'root',
})
export class ColorService {
  readonly colors = signal(DEFAULT_COLORS);
  // readonly blueColor =
  // Set this variable as a signal with the blue color values using the DEFAULT_COLORS Array.
  readonly currentColor = signal(DEFAULT_COLORS[0]);

  // readonly mixedColors =
  // with the computed function, check the `currentColor` value and set the `mixedColors` value
  // to violet (Hex code #8f00ff) or green (Hex code #008000)

  setColor(colorName: string) {
    const selectedColor = this.colors().find((c) => c.name === colorName);
    if (selectedColor) {
      this.currentColor.set(selectedColor);
    }
  }
}
