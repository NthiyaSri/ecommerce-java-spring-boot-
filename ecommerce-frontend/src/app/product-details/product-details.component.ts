import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService, Product } from '../product.service';

interface Review {
  userName: string;
  rating: number;
  comment: string;
  date: Date;
  verified: boolean;
  helpful?: number;
}

interface ColorOption {
  name: string;
  code: string;
  image: string;
}

interface RatingBreakdown {
  stars: number;
  percentage: number;
  count: string;
}

interface Tab {
  id: string;
  label: string;
}

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  @Input() productId: number = 1;
  
  product: Product | null = null;
  loading = true;
  error = '';
  quantity = 1;
  selectedImageIndex = 0;
  productImages: string[] = [];
  reviews: Review[] = [];
  
  // Interactive features
  isInWishlist = false;
  selectedColor = 'Breeze Blue';
  selectedRAM = 6;
  deliveryPincode = '';
  deliveryChecked = false;
  activeTab = 'description';
  
  // Available options
  availableColors: ColorOption[] = [
    { name: 'Breeze Blue', code: '#87CEEB', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=100&h=100&fit=crop' },
    { name: 'Midnight Black', code: '#2F2F2F', image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=100&h=100&fit=crop' },
    { name: 'Pearl White', code: '#F8F8FF', image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=100&h=100&fit=crop' },
    { name: 'Rose Gold', code: '#E8B4B8', image: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=100&h=100&fit=crop' }
  ];
  
  availableRAM = [4, 6, 8];
  
  tabs: Tab[] = [
    { id: 'description', label: 'Description' },
    { id: 'specifications', label: 'Specifications' },
    { id: 'features', label: 'Features' },
    { id: 'reviews', label: 'Reviews' }
  ];
  
  ratingBreakdown: RatingBreakdown[] = [
    { stars: 5, percentage: 68, count: '32,419' },
    { stars: 4, percentage: 18, count: '8,592' },
    { stars: 3, percentage: 8, count: '3,817' },
    { stars: 2, percentage: 4, count: '1,908' },
    { stars: 1, percentage: 2, count: '998' }
  ];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProduct();
    this.generateSampleReviews();
  }

  loadProduct(): void {
    this.loading = true;
    this.error = '';
    
    this.productService.getProduct(this.productId).subscribe({
      next: (data) => {
        this.product = data;
        this.setupProductImages();
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load product details. Please try again.';
        this.loading = false;
        console.error('Error loading product:', err);
      }
    });
  }

  setupProductImages(): void {
    if (this.product) {
      this.productImages = [this.product.imageUrl];
      
      // Add additional images if available
      if (this.product.additionalImages) {
        const additionalImages = this.product.additionalImages.split(',');
        this.productImages.push(...additionalImages);
      }
    }
  }

  selectImage(index: number): void {
    this.selectedImageIndex = index;
  }

  toggleWishlist(): void {
    this.isInWishlist = !this.isInWishlist;
    const message = this.isInWishlist ? 'Added to wishlist!' : 'Removed from wishlist!';
    console.log(message);
  }

  selectColor(colorName: string): void {
    this.selectedColor = colorName;
    console.log('Selected color:', colorName);
  }

  selectRAM(ram: number): void {
    this.selectedRAM = ram;
    console.log('Selected RAM:', ram + 'GB');
  }

  checkDelivery(): void {
    if (this.deliveryPincode.length >= 6) {
      this.deliveryChecked = true;
      console.log('Checking delivery for pincode:', this.deliveryPincode);
    } else {
      alert('Please enter a valid 6-digit pincode');
    }
  }

  viewDeliveryDetails(): void {
    console.log('Viewing delivery details');
    alert('Delivery Details:\n• Standard delivery: 2-3 business days\n• Express delivery: 1-2 business days\n• Free delivery on orders above ₹499');
  }

  setActiveTab(tabId: string): void {
    this.activeTab = tabId;
  }

  incrementQuantity(): void {
    if (this.product && this.quantity < (this.product.stockQuantity || 10)) {
      this.quantity++;
    }
  }

  decrementQuantity(): void {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  addToCart(): void {
    if (this.product) {
      const cartItem = {
        product: this.product,
        quantity: this.quantity,
        color: this.selectedColor,
        ram: this.selectedRAM
      };
      console.log('Added to cart:', cartItem);
      alert(`Added ${this.quantity} x ${this.product.name} (${this.selectedColor}, ${this.selectedRAM}GB) to cart!`);
    }
  }

  buyNow(): void {
    if (this.product) {
      const orderItem = {
        product: this.product,
        quantity: this.quantity,
        color: this.selectedColor,
        ram: this.selectedRAM,
        deliveryPincode: this.deliveryPincode
      };
      console.log('Buy now:', orderItem);
      alert(`Proceeding to checkout with ${this.quantity} x ${this.product.name} (${this.selectedColor}, ${this.selectedRAM}GB)`);
    }
  }

  goBack(): void {
    // Emit event to parent component to navigate back
    const event = new CustomEvent('navigate-to-product', { 
      detail: { page: 'home' }
    });
    window.dispatchEvent(event);
  }

  formatNumber(num: number): string {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  }

  getStarArray(rating: number): number[] {
    return Array(Math.floor(rating)).fill(0);
  }

  getEmptyStarArray(rating: number): number[] {
    return Array(5 - Math.floor(rating)).fill(0);
  }

  formatPrice(price: number): string {
    return `₹${price.toLocaleString('en-IN')}`;
  }

  getDiscountPercentage(): number {
    if (this.product && this.product.originalPrice && this.product.originalPrice > this.product.price) {
      return Math.round(((this.product.originalPrice - this.product.price) / this.product.originalPrice) * 100);
    }
    return 0;
  }

  getSpecificationArray(): string[] {
    if (this.product && this.product.specifications) {
      return this.product.specifications.split('|').filter(spec => spec.trim());
    }
    return [];
  }

  getFeatureArray(): string[] {
    if (this.product && this.product.features) {
      return this.product.features.split('|').filter(feature => feature.trim());
    }
    return [];
  }

  generateSampleReviews(): void {
    this.reviews = [
      {
        userName: 'Rajesh Kumar',
        rating: 5,
        comment: 'Excellent phone with great camera quality. Battery life is amazing! The 6000mAh battery easily lasts a full day with heavy usage.',
        date: new Date('2024-09-15'),
        verified: true,
        helpful: 24
      },
      {
        userName: 'Priya Sharma',
        rating: 4,
        comment: 'Good value for money. Fast delivery and well packaged. The display quality is impressive for this price range.',
        date: new Date('2024-09-10'),
        verified: true,
        helpful: 18
      },
      {
        userName: 'Amit Singh',
        rating: 5,
        comment: 'Outstanding performance and build quality. The Dimensity 6300 processor handles multitasking smoothly. Highly recommended!',
        date: new Date('2024-09-05'),
        verified: false,
        helpful: 31
      },
      {
        userName: 'Sneha Patel',
        rating: 4,
        comment: 'Great phone overall. The display is crisp and clear. Camera performance in daylight is excellent.',
        date: new Date('2024-08-28'),
        verified: true,
        helpful: 15
      },
      {
        userName: 'Vikram Reddy',
        rating: 5,
        comment: 'Best phone in this price segment. The 50MP camera takes stunning photos. Fast charging is a bonus!',
        date: new Date('2024-08-20'),
        verified: true,
        helpful: 27
      }
    ];
  }
}