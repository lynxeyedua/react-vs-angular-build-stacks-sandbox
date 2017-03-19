import { Component, Input } from '@angular/core';
import { LocationGroup } from './interfaces';

@Component({
  selector: 'location-group',
  template: `<div>{{ locationGroup?.name }}</div> 
<location *ngFor="let location of locationGroup.locations" [location]="location"></location>`
})
export class LocationGroupComponent {
  @Input()
  locationGroup: LocationGroup;
}
