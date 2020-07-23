import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Category} from '../../../generated/graphql';
import {Apollo} from 'apollo-angular';
import {getCategories} from './categories.service.graphql';
import {filter, pluck} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private categoriesSubject$ = new BehaviorSubject<Category[]>([]);
  categories$ = this.categoriesSubject$.asObservable();

  constructor(private apollo: Apollo) {
    this.fetchCategories();
  }

  private fetchCategories(): void {
    this.apollo.query({
      query: getCategories
    }).pipe(
      pluck('data', 'categories'),
    ).subscribe((categories: Category[]) => {
      console.log('categories', categories);
      this.categoriesSubject$.next(categories);
    });
  }
}
