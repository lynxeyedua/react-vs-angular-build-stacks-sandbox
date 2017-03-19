import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EditorComponent } from './editor.component';
import { LocationGroupComponent } from './location-group.component';
import { LocationComponent } from './location.component';
import { LocationJobComponent } from './location-job.component';
import { DateCellComponent } from './date-cell.component';
import { ShiftComponent } from './shift.component';
import { DatesService } from './dates.service';

@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    LocationGroupComponent,
    LocationComponent,
    LocationJobComponent,
    DateCellComponent,
    ShiftComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [DatesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
