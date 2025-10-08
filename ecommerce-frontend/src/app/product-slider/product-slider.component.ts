import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService, Product } from '../product.service';

@Component({
  selector: 'app-product-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-slider.component.html',
  styleUrls: ['./product-slider.component.css']
})
export class ProductSliderComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  currentIndex = 0;
  itemsPerView = 3;
  autoSlideInterval: any;
  loading = true;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.loadProducts();
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading products for slider:', err);
        this.loading = false;
      }
    });
  }

  startAutoSlide(): void {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 10000); // 10 seconds
  }

  nextSlide(): void {
    if (this.products.length > this.itemsPerView) {
      this.currentIndex = (this.currentIndex + 1) % (this.products.length - this.itemsPerView + 1);
    }
  }

  prevSlide(): void {
    if (this.products.length > this.itemsPerView) {
      this.currentIndex = this.currentIndex === 0 
        ? this.products.length - this.itemsPerView 
        : this.currentIndex - 1;
    }
  }

  goToSlide(index: number): void {
    this.currentIndex = index;
  }

  getVisibleProducts(): Product[] {
    return this.products.slice(this.currentIndex, this.currentIndex + this.itemsPerView);
  }

  getStarArray(rating: number): number[] {
    return Array(rating).fill(0);
  }

  getTotalSlides(): number {
    return Math.max(0, this.products.length - this.itemsPerView + 1);
  }
}