import { Component } from '@angular/core';
import { LocationGroup, Location, Job } from './interfaces';
import { DatesService } from './dates.service';

@Component({
  selector: 'editor',
  templateUrl: './editor.html'
})
export class EditorComponent {
  locationGroups: LocationGroup[];
  daysCount: number;

  constructor(private ds: DatesService) {
    this.locationGroups = [];
    this.daysCount = 10;
  }

  ngOnInit() {
    this.generateData();
  }

  onDaysChanged(val: number) {
    let diff = this.ds.dates.length - val;

    if (diff > 0) {
      // this.ds.dates.length = 0;
      // this.generateDates();
      this.ds.dates.length = val;
    } else if (diff < 0) {
      let baseIndex = this.ds.dates.length;

      Array.from({length: Math.abs(diff)}, (v, i) => i).forEach((index: number) => {
        let date = new Date();
        date.setDate(date.getDate() + baseIndex + index);
        this.ds.dates.push(date);
      });
    }
  }

  /**
   * Generate dummy data for testing purposes
   */
  private generateData(): void {
    Array.from({length: 10}, (v, i) => i).forEach((index: number) => {
      let group = {
        name: `Location group #${ index + 1 }`,
        locations: this.generateLocations()
      };

      this.locationGroups.push(group);
    });

    this.generateDates();
  }

  /**
   * Generate locations for every group of locations
   * @returns {Location[]}
   */
  private generateLocations(): Location[] {
    let locations: Location[] = [];

    Array.from({length: 10}, (v, i) => i).forEach((index: number) => {
      locations.push({
        name: `Location #${ index + 1 }`,
        jobs: this.generateJobs()
      });
    });

    return locations;
  }

  /**
   * Generate jobs for every location
   * @returns {Job[]}
   */
  private generateJobs(): Job[] {
    let jobs: Job[] = [];

    Array.from({length: 10}, (v, i) => i).forEach((index: number) => {
      jobs.push({
        name: `Job #${ index + 1 }`,
        shiftsPerDates: {}
      });
    });

    return jobs;
  }

  private generateDates() : void {
    Array.from({length: this.daysCount}, (v, i) => i).forEach((index: number) => {
      let date = new Date();
      date.setDate(date.getDate() + index);
      this.ds.dates.push(date);
    });
  }

}
