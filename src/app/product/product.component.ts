import { Component, OnInit } from '@angular/core';
import {Product} from './product';
import {ProductService} from './product.service';
import {NotificationsService} from 'angular2-notifications';
import {CartService} from '../cart/cart.service';
import { ActivatedRoute} from '@angular/router';
import { AppPager } from '../app-pager';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService]
})
export class ProductComponent implements OnInit {

  products: Product[];
  addedProduct: string;
  pager: AppPager = new AppPager();
   constructor( private activatedRoute: ActivatedRoute, private productService: ProductService,
                private notificationService: NotificationsService, private cartService: CartService) {
  }

  ngOnInit() {
     this.activatedRoute.params.subscribe(p => this.getProducts(p['seoUrl']));
  }

  getProducts(seoCategory: string) {
    this.productService.getProducts(seoCategory).subscribe(p => {
      this.products = p;
      this.pager = this.getPager(p.length);
    });
  }
  addToCart(product: Product) {
    this.addedProduct = product.productName;
    this.cartService.addToCart(product);
    this.notificationService.success('Succesfull', product.productName + ' added to cart!');
  }

  getPager(totalItems: number, currentPage: number = 1, pageSize: number = 3): AppPager {
    let totalPages = Math.ceil(totalItems / pageSize);
    let pages: Array<number> = [];
    for ( let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    var pager = new AppPager();
    pager.currentPage = currentPage;
    pager.pageList = pages;
    pager.pageSize = pageSize;

    return pager;
  }
  setPage(page: number) {
     this.pager.currentPage = page;
  }
}
