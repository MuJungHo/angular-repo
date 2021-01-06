import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-chart',
  templateUrl: './product-chart.component.html',
  styleUrls: ['./product-chart.component.css']
})
export class ProductChartComponent implements OnInit {
  items = [];
  constructor(
    private CartService: CartService
  ) { }

  clearCart() {
    this.items = this.CartService.clearCart();
  }

  ngOnInit(): void {
    this.items = this.CartService.getItems();
  }

}
