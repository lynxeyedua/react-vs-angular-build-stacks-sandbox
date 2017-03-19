import { Component, Input } from '@angular/core';
import { Job } from './interfaces';
import { DatesService } from './dates.service';

@Component({
  selector: 'location-job',
  template: `<div>
    <span>{{ job.name }}</span>
    <date-cell *ngFor="let date of dates;" [date]="date"></date-cell>
</div>`
})
export class LocationJobComponent {
  @Input()
  job: Job;

  dates: Date[];

  constructor(private ds: DatesService) {}

  ngOnInit() {
    this.dates = this.ds.dates;
  }
}
