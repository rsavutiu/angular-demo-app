import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product;
  activeRoute: ActivatedRoute;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { this.activeRoute = route; }
  
  ngOnInit() {
      this.route.paramMap.subscribe(params => {
        this.product = products[+params.get('productId')];
        console.log('this product: ' + this.product);
        console.log(params);
        console.log(products);
        console.log(this.activeRoute);
    });
  }

  addToCart(product) {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(product);
  }
}