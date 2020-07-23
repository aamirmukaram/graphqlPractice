import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Product} from '../../../../generated/graphql';
import {MatInput} from '@angular/material/input';

@Component({
  selector: 'app-add-to-cart[product]',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss']
})
export class AddToCartComponent implements OnInit {
  @Input() product: Product;
  @ViewChild(MatInput, {static: true}) quantityInput;

  constructor() {
  }

  ngOnInit(): void {
  }

  clearInput(): void {
    this.quantityInput.value = '';
  }

  addToCart(product: Product): void {
    this.clearInput();
  }

}
