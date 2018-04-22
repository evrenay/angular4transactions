import { Component, OnInit } from '@angular/core';
import {CartItem} from './cart-item';
import {CartService} from './cart.service';
import {Product} from '../product/product';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cartService: CartService) { }

  cartItems: CartItem[] = [];
  isProductRemoved: boolean = false;
  ngOnInit() {
    this.cartItems = this.cartService.list();
  }

  removeFromCart(product: Product) {
    if (confirm('Silmek istediğinizden emin misiniz ?')) {
        this.cartService.removeFromCart(product);
        this.isProductRemoved = true;
    }
  }
}
