import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root',
})
export class GraphQLService {
  constructor(private apollo: Apollo) {}

  // GraphQL Query to fetch all talks
  getAllTalks() {
    return this.apollo.watchQuery<any>({
      query: gql`
        query {
          getAllTalks {
            id
            subject
            giphyUrl
            numberOfAttendees
            speaker {
              id
              name
            }
          }
        }
      `,
    }).valueChanges;
  }
}
