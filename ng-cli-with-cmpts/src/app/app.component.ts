import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>{{ title }}</div>
<editor></editor>`
})
export class AppComponent {
  title = 'app works!';
}
