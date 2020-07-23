import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Customer} from '../../generated/graphql';
import {pluck} from 'rxjs/operators';
import {getCustomers} from './customers.service.graphql';
import {Apollo} from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  private customersSubject$ = new BehaviorSubject<Customer[]>([]);
  customers$: Observable<Customer[]> = this.customersSubject$.asObservable();

  private selectedCustomerSubject$ = new BehaviorSubject<Customer>(null);
  selectedCustomer$ = this.selectedCustomerSubject$.asObservable();

  constructor(private apollo: Apollo) {
    this.fetchCustomers();
  }

  private fetchCustomers(): void {
    this.apollo.query({
      query: getCustomers
    })
      .pipe(
        pluck('data', 'customers')
      ).subscribe((customers: Customer[]) => {
      this.customersSubject$.next(customers);
    });
  }

  setSelectedCustomer(customer: Customer): void {
    this.selectedCustomerSubject$.next(customer);
  }
}
