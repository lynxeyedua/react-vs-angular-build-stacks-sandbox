import { Component, Input } from '@angular/core';
import { Shift } from './interfaces/shift';

@Component({
  selector: 'shift',
  template: `Shift`,
})
export class ShiftComponent {
  @Input()
  shift: Shift;
}
