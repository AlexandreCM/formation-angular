import {Component, OnInit} from '@angular/core';
import {Product} from '../product.interface';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  title = 'Products';
  products: Product[];
  selectedProduct: Product;

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  onSelect(product: Product): void {
    this.selectedProduct = product;
  }

}
