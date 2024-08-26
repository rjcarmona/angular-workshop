import { Component, inject } from '@angular/core';
import { ColorService } from '../../color.service';

@Component({
  selector: 'app-color-switcher',
  standalone: true,
  imports: [],
  templateUrl: './color-switcher.component.html',
  styleUrl: './color-switcher.component.scss',
})
export class ColorSwitcherComponent {
  colorService = inject(ColorService);
  // Create a variable that filters the colors `signal` excluding the blue color
}
