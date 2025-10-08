import { Component } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';
import { BannerSliderComponent } from './banner-slider/banner-slider.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductListComponent, BannerSliderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ecommerce Store';
}