import { Location, LocationGroup, Job } from '../interfaces';
let dates: Date[] = [];
let locationGroups: LocationGroup[] = [];

/**
 * Generate locations for every group of locations
 * @returns {Location[]}
 */
function generateLocations(): Location[] {
  let locations: Location[] = [];

  for (let index = 0; index < 10; index++) {
    locations.push({
      name: `Location #${ index + 1 }`,
      jobs: generateJobs()
    });
  }

  return locations;
}

/**
 * Generate jobs for every location
 * @returns {Job[]}
 */
function generateJobs(): Job[] {
  let jobs: Job[] = [];

  for (let index = 0; index < 10; index++) {
    jobs.push({
      name: `Job #${ index + 1 }`,
      shiftsPerDates: {}
    });
  }

  return jobs;
}

function generateDates() : void {
  for (let index = 0; index < 10; index++) {
    let date = new Date();
    date.setDate(date.getDate() + index);
    dates.push(date);
  }
}

/**
 * Generate dummy data for testing purposes
 */
export function generateData(): {locationGroups: LocationGroup[], dates: Date[]} {
  for (let index = 0; index < 10; index++) {
    let group = {
      name: `Location group #${ index + 1 }`,
      locations: generateLocations()
    };

    locationGroups.push(group);
  }

  generateDates();

  return {
    locationGroups: locationGroups,
    dates: dates
  }
}
