import { Component, Input } from '@angular/core';
import { Shift } from './interfaces';

@Component({
  selector: 'date-cell',
  template: `Date`,
})
export class DateCellComponent {
  @Input()
  date: Date;
}
