import {Component, OnInit} from '@angular/core';
import {Product} from '../product.interface';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService) {
  }

  ngOnInit(): void {
    const id = +this.activatedRoute.snapshot.params.id;
    this
      .productService
      .getProductById(id)
      .subscribe(
        result => this.product = result
      );
  }

}
