import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService, Product } from '../product.service';

@Component({
  selector: 'app-mobile-shop',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './mobile-shop.component.html',
  styleUrls: ['./mobile-shop.component.css']
})
export class MobileShopComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  categories: string[] = [];
  
  // Filter states
  selectedCategory = '';
  selectedSort = 'featured';
  priceRange = { min: 0, max: 100000 };
  showFilters = false;
  
  // Loading states
  loading = true;
  error = '';

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.loadProducts();
    this.loadCategories();
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
        this.filteredProducts = [...data];
        this.loading = false;
        this.applyFilters();
      },
      error: (err) => {
        this.error = 'Failed to load products';
        this.loading = false;
        console.error('Error loading products:', err);
      }
    });
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

  applyFilters(): void {
    let filtered = [...this.products];

    // Category filter
    if (this.selectedCategory) {
      filtered = filtered.filter(product => product.category === this.selectedCategory);
    }

    // Price range filter
    filtered = filtered.filter(product => 
      product.price >= this.priceRange.min && product.price <= this.priceRange.max
    );

    // Sort
    switch (this.selectedSort) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        // Featured - keep original order
        break;
    }

    this.filteredProducts = filtered;
  }

  onCategoryChange(category: string): void {
    this.selectedCategory = category;
    this.applyFilters();
    this.closeFilters();
  }

  onSortChange(sort: string): void {
    this.selectedSort = sort;
    this.applyFilters();
    this.closeFilters();
  }

  onPriceRangeChange(min: number, max: number): void {
    this.priceRange = { min, max };
    this.applyFilters();
  }

  toggleFilters(): void {
    this.showFilters = !this.showFilters;
  }

  closeFilters(): void {
    this.showFilters = false;
  }

  clearFilters(): void {
    this.selectedCategory = '';
    this.selectedSort = 'featured';
    this.priceRange = { min: 0, max: 100000 };
    this.applyFilters();
    this.closeFilters();
  }

  goToShop(product: Product): void {
    // Navigate to product detail page
    alert(`Navigating to ${product.name} details page. Product ID: ${product.id}`);
    // In a real app, you would use Angular Router here
    // this.router.navigate(['/product', product.id]);
  }

  getStarArray(rating: number): number[] {
    return Array(rating).fill(0);
  }

  formatPrice(price: number): string {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  }

  trackByProductId(index: number, product: Product): number {
    return product.id;
  }
}