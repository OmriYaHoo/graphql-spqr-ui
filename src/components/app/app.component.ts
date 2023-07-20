import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>GraphQL SPQR UI</h1>
    <app-talks></app-talks>
  `
})
export class AppComponent {
  title = 'graphql-spqr-ui';
}
