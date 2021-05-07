import {Component, OnInit} from '@angular/core';
import {Product} from '../product.interface';
import {ProductService} from '../../services/product.service';
import {EMPTY, Observable} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  title = 'Products';
  selectedProduct: Product;
  products$: Observable<Product[]>;
  productsNumber$: Observable<number>;
  errorMessage: string;

  pageSize = 5;
  start = 0;
  end = this.pageSize;
  pageNumber = 1;

  constructor(private productService: ProductService, private router: Router) {
  }

  ngOnInit(): void {
    this.products$ = this.productService.products$
      .pipe(
        catchError(err => {
          this.errorMessage = err;
          return EMPTY;
        })
      );
    this.productsNumber$ = this.products$
      .pipe(
        map(products => products.length)
      );
  }

  onSelect(product: Product): void {
    this.selectedProduct = product;
    this.router.navigateByUrl('/products/' + product.id);
  }

  previousPage(): void {
    this.start -= this.pageSize;
    this.end -= this.pageSize;
    this.pageNumber--;
    this.selectedProduct = null;
  }

  nextPage(): void {
    this.start += this.pageSize;
    this.end += this.pageSize;
    this.pageNumber++;
    this.selectedProduct = null;
  }

}
