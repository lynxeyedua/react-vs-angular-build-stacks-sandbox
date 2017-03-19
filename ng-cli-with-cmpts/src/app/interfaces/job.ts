import { Shift } from './shift';

export interface Job {
  name: string;
  shiftsPerDates: {[key: string]: Shift[]};
}
