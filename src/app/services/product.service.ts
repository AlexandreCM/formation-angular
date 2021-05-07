import {Injectable} from '@angular/core';
import {Product} from '../products/product.interface';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, delay, shareReplay, tap, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private readonly baseUrl = 'https://storerestservice.azurewebsites.net/api/products/';
  products$: Observable<Product[]>;

  constructor(private http: HttpClient) {
    this.initProducts();
  }

  initProducts(): void {
    this.products$ = this
      .http
      .get<Product[]>(this.baseUrl)
      .pipe(
        delay(1500),
        tap(console.table),
        shareReplay()
      );
  }

}
