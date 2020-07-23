import {Injectable} from '@angular/core';
import {Apollo} from 'apollo-angular';
import {Customer} from '../generated/graphql';
import {Observable} from 'rxjs';
import {getCustomers} from './main.service.graphql';
import {map, pluck, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  // customers: Customer[];

  constructor(private apollo: Apollo) {
  }

  getCustomers(): Observable<Customer[]> {
    return this.apollo.query({
      query: getCustomers
    })
      .pipe(
        pluck('data', 'customers')
      );
  }
}
