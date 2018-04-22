import { Injectable, Inject } from '@angular/core';
import { Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { Category} from './category';
import 'rxjs/add/operator/map'; /* gelen response datayı istediğimiz nesneye map etmek için  */
import 'rxjs/add/operator/do';  /* data geldiğinde yapılması gereken işlemler  */
import 'rxjs/add/operator/catch'; /* hata olduğunda yapılması gereken işlemler yazılır  */

@Injectable()
export class CategoryService {

  constructor(private http: Http, @Inject('apiUrl') private apiUrl) {
  }
    url: string = this.apiUrl + '/categories';
    getCategories(): Observable<Category[]> {
      return this.http.get(this.url).map(response => response.json());
    }
}
