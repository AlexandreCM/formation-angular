import {Component, OnInit} from '@angular/core';
import {Product} from '../product.interface';
import {ProductService} from '../../services/product.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  title = 'Products';
  products: Product[];
  selectedProduct: Product;
  products$: Observable<Product[]>;

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.products$ = this.productService.products$;
  }

  onSelect(product: Product): void {
    this.selectedProduct = product;
  }

}
