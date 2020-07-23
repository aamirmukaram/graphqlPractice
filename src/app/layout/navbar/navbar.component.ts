import {Component, OnInit} from '@angular/core';
import {CustomersService} from '../../services/customers.service';
import {Observable} from 'rxjs';
import {Customer} from '../../../generated/graphql';
import {filter, map} from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  customers$: Observable<Customer[]> = this.customersService.customers$;
  selectedCustomer$: Observable<Customer> = this.customersService.selectedCustomer$;

  constructor(private customersService: CustomersService) {
  }

  ngOnInit(): void {
  }

  setSelectedCustomer(customer: Customer): void {
    this.customersService.setSelectedCustomer(customer);
  }

}
