import {Component} from '@angular/core';
import {MainService} from './main.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  customers$ = this.mainService.getCustomers();

  constructor(private mainService: MainService) {
  }
}
