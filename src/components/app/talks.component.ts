import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GraphQLService } from './graphql.service';

@Component({
  selector: 'app-talks',
  templateUrl: './talks.component.html', // Updated to reference the new template file
  styleUrls: ['./talks.component.sass']
})
export class TalksComponent implements OnInit {
  // @ts-ignore
  talks$: Observable<any[]>;

  loading = true;
  error = false;

  constructor(private graphqlService: GraphQLService) {}

  ngOnInit() {
    this.talks$ = this.graphqlService
      .getAllTalks()
      .pipe(
        map((result) => {
          this.loading = result.loading;
          this.error = !!result.errors;
          return result.data?.getAllTalks || [];
        })
      );
  }
}
