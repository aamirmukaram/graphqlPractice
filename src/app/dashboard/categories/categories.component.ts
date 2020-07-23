import {Component, OnInit} from '@angular/core';
import {CategoriesService} from './categories.service';
import {Category} from '../../../generated/graphql';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categories$: Observable<Category[]> = this.categoriesService.categories$;

  constructor(private categoriesService: CategoriesService) {
  }

  ngOnInit(): void {
  }

}
