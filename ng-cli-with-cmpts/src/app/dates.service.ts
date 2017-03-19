import { Injectable } from '@angular/core';

@Injectable()
export class DatesService {
  dates: Date[];

  constructor() {
    this.dates = [];
  }
}
