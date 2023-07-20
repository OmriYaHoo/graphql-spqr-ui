import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {GraphQLModule} from './graphql.module';
import {TalksComponent} from './talks.component';
import {AppComponent} from './app.component';
import {APOLLO_OPTIONS, ApolloModule} from 'apollo-angular'
import {ApolloClientOptions, InMemoryCache} from "@apollo/client/core";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    TalksComponent
  ],
  imports: [
    BrowserModule,
    GraphQLModule,
    ApolloModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatProgressSpinnerModule
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: apolloFactory,
      deps: [],
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

export function apolloFactory(): ApolloClientOptions<any> {
  return {
    uri: 'http://localhost:9001/graphql', // Replace with your actual GraphQL API endpoint
    cache: new InMemoryCache(),
  };
}
