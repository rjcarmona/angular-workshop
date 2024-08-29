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
  readonly currentColor = signal(DEFAULT_COLORS[0]);

  setColor(colorName: string) {
    const selectedColor = this.colors().find((c) => c.name === colorName);
    if (selectedColor) {
      this.currentColor.set(selectedColor);
    }
  }
}
