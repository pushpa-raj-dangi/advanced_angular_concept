import { Item, Product } from './../models/product.interface';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class StockInventoryService {
  constructor(private http: HttpClient) {}

  getCartItems(): Observable<Item[]> {
    return this.http
      .get('http://localhost:3000/cart')
      .pipe(map((response: any) => response));
  }

  getProducts(): Observable<Product[]> {
    return this.http
      .get('http://localhost:3000/prducts')
      .pipe(map((response: any) => response));
  }
}
