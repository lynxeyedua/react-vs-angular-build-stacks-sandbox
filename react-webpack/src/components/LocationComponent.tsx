import * as React from 'react';
import { LocationJobComponent } from './LocationJobComponent';
import { Location, Job } from './interfaces';


export function LocationComponent(props: {location: Location, dates: Date[]}) {
  const jobsList = props.location.jobs.map((job: Job) => <LocationJobComponent job={ job } dates={ props.dates } />);

  return (
    <div>
      <div>{ props.location.name }</div>
      { jobsList }
    </div>
  );
}