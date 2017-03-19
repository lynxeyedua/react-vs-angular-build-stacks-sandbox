import { Component, Input } from '@angular/core';
import { Location } from './interfaces';

@Component({
  selector: 'location',
  template: `
<div>{{ location?.name }}</div> 
<location-job *ngFor="let job of location.jobs" [job]="job"></location-job>
`,
})
export class LocationComponent {
  @Input()
  location: Location;
}
