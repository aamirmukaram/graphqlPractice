import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard.component';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {CategoriesComponent} from './categories/categories.component';
import {CartComponent} from './cart/cart.component';
import {ProductComponent} from './product/product.component';
import {CategoryComponent} from './categories/category/category.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { AddToCartComponent } from './categories/add-to-cart/add-to-cart.component';


@NgModule({
  declarations: [DashboardComponent, CategoriesComponent, CartComponent, ProductComponent, CategoryComponent, AddToCartComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,

    MatExpansionModule,
    MatListModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule
  ]
})
export class DashboardModule {
}
