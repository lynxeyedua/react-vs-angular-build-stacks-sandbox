import * as React from 'react';
import { LocationGroup } from './interfaces';
import { generateData } from './helpers';
import { LocationGroupComponent } from './LocationGroupComponent';

export function Editor() {
  let data: {locationGroups: LocationGroup[], dates: Date[]} = generateData();
  const listGroups = data.locationGroups.map((group: LocationGroup) => <LocationGroupComponent group={ group } dates={ data.dates } />);

  return (
    <div>
      <div>Editor</div>
      {listGroups}
    </div>
  );
}