import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
import { ProductsStore } from './products.store';
import { Product } from './products.model';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  constructor(private productsStore: ProductsStore, private http: HttpClient) {}

  public get() {
    return this.http
      .get<Product[]>('https://api.com')
      .pipe(tap((entities) => this.productsStore.set(entities)));
  }

  public add(product: Product) {
    this.productsStore.add(product);
  }

  public update(id: number, product: Partial<Product>): void {
    this.productsStore.update(id, product);
  }

  public remove(id: number) {
    this.productsStore.remove(id);
  }
}
