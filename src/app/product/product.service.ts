import { Injectable, Inject } from '@angular/core';
import {Product} from './product';
import { Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'; /* gelen response datayı istediğimiz nesneye map etmek için  */
import 'rxjs/add/operator/do';  /* data geldiğinde yapılması gereken işlemler  */
import 'rxjs/add/operator/catch'; /* hata olduğunda yapılması gereken işlemler yazılır  */

@Injectable()
export class ProductService {

  constructor(private http: Http, @Inject('apiUrl') private apiUrl) { }

  getProducts(seoUrl: string): Observable<Product[]> {
    if (seoUrl) {
      return this.http.get(this.apiUrl + '/products/' + seoUrl)
        .map(response => response.json());
    } else {
      return this.http.get(this.apiUrl + '/products')
        .map(response => response.json());
    }

}
  }
