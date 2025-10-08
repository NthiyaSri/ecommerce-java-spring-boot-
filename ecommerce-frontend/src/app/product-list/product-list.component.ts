import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService, Product } from '../product.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  categories: string[] = [];
  selectedCategory = '';
  loading = true;
  error = '';

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.loadCategories();
    this.loadProducts();
  }

  loadCategories(): void {
    this.productService.getCategories().subscribe({
      next: (data) => {
        this.categories = data;
      },
      error: (err) => {
        console.error('Error loading categories:', err);
      }
    });
  }

  loadProducts(category?: string): void {
    this.loading = true;
    this.productService.getProducts(category).subscribe({
      next: (data) => {
        this.products = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load products. Please make sure the backend server is running.';
        this.loading = false;
        console.error('Error loading products:', err);
      }
    });
  }

  onCategoryChange(category: string): void {
    this.selectedCategory = category;
    this.loadProducts(category || undefined);
  }

  getStarArray(rating: number): number[] {
    return Array(rating).fill(0);
  }
}