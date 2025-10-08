import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface BannerSlide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  backgroundImage: string;
  textColor: string;
  buttonColor: string;
}

@Component({
  selector: 'app-banner-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banner-slider.component.html',
  styleUrls: ['./banner-slider.component.css']
})
export class BannerSliderComponent implements OnInit, OnDestroy {
  currentSlide = 0;
  autoSlideInterval: any;

  slides: BannerSlide[] = [
    {
      id: 1,
      title: "NOTHING (R)",
      subtitle: "Phone (3a)",
      description: "Elite cameras. Festive upgrade.",
      buttonText: "Shop Now",
      buttonLink: "#electronics",
      backgroundImage: "linear-gradient(135deg, #232f3e 0%, #37475a 100%), url('https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&h=400&fit=crop')",
      textColor: "#ffffff",
      buttonColor: "#ff9900"
    },
    {
      id: 2,
      title: "MEGA SALE",
      subtitle: "Up to 70% OFF",
      description: "Best deals on electronics, fashion & more",
      buttonText: "Explore Deals",
      buttonLink: "#sale",
      backgroundImage: " url('https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&h=400&fit=crop')",
      textColor: "#ffffff",
      buttonColor: "#f39c12"
    },
    {
      id: 3,
      title: "NEW ARRIVALS",
      subtitle: "Latest Collection",
      description: "Discover trending products just for you",
      buttonText: "View Collection",
      buttonLink: "#new",
      backgroundImage: "linear-gradient(135deg, #3498db 0%, #2980b9 100%), url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=400&fit=crop')",
      textColor: "#ffffff",
      buttonColor: "#e67e22"
    },
    {
      id: 4,
      title: "PREMIUM QUALITY",
      subtitle: "Luxury Items",
      description: "Experience the finest products available",
      buttonText: "Shop Premium",
      buttonLink: "#premium",
      backgroundImage: "linear-gradient(135deg, #8e44ad 0%, #9b59b6 100%), url('https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=400&fit=crop')",
      textColor: "#ffffff",
      buttonColor: "#f1c40f"
    },
    {
      id: 5,
      title: "FREE SHIPPING",
      subtitle: "On Orders Above ₹999",
      description: "Fast delivery to your doorstep",
      buttonText: "Start Shopping",
      buttonLink: "#shipping",
      backgroundImage: "linear-gradient(135deg, #27ae60 0%, #2ecc71 100%), url('https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=400&fit=crop')",
      textColor: "#ffffff",
      buttonColor: "#e74c3c"
    }
  ];

  ngOnInit(): void {
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  startAutoSlide(): void {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 10000); // 10 seconds
  }

  stopAutoSlide(): void {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide(): void {
    this.currentSlide = this.currentSlide === 0 ? this.slides.length - 1 : this.currentSlide - 1;
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
  }

  onMouseEnter(): void {
    this.stopAutoSlide();
  }

  onMouseLeave(): void {
    this.startAutoSlide();
  }
}