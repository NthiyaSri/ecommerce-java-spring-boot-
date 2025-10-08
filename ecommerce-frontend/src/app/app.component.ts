import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { BannerSliderComponent } from './banner-slider/banner-slider.component';
import { AuthComponent } from './auth/auth.component';
import { OrdersReturnsComponent } from './orders-returns/orders-returns.component';
import { MobileShopComponent } from './mobile-shop/mobile-shop.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ProductListComponent, 
    BannerSliderComponent,
    AuthComponent,
    OrdersReturnsComponent,
    MobileShopComponent,
    ProductDetailsComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Ecommerce Store';
  currentPage = 'home';
  selectedProductId = 1;

  ngOnInit(): void {
    // Listen for navigation events from child components
    window.addEventListener('navigate-to-product', (event: any) => {
      this.navigateTo(event.detail.page, event.detail.productId);
    });
  }

  navigateTo(page: string, productId?: number): void {
    this.currentPage = page;
    if (productId) {
      this.selectedProductId = productId;
    }
  }
}