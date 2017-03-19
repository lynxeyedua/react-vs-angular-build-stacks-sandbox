import * as React from 'react';
import { DateCellComponent } from './DateCellComponent';
import { Job } from './interfaces';


export function LocationJobComponent(props: {job: Job, dates: Date[]}) {
  const datesList = props.dates.map((date: Date) => <DateCellComponent date={ date } />);

  return (
    <div>
      <span>{ props.job.name }</span>
      { datesList }
    </div>
  )
}