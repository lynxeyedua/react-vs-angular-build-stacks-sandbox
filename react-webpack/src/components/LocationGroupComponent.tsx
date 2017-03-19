import * as React from 'react';
import { LocationComponent } from './LocationComponent';
import { LocationGroup, Location } from './interfaces';

export function LocationGroupComponent(props: {group: LocationGroup, dates: Date[]}) {
  const locationsList = props.group.locations.map((location: Location) => <LocationComponent location={ location } dates={ props.dates } />);

  return <div>
    <div>{ props.group.name }</div>
    { locationsList }
  </div>;
}