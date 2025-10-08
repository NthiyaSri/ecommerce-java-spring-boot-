import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Order {
  id: string;
  date: string;
  status: 'delivered' | 'shipped' | 'processing' | 'cancelled';
  total: number;
  items: OrderItem[];
  trackingNumber?: string;
  returnStatus: 'none' | 'requested' | 'approved' | 'completed';
}

interface OrderItem {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

@Component({
  selector: 'app-orders-returns',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './orders-returns.component.html',
  styleUrls: ['./orders-returns.component.css']
})
export class OrdersReturnsComponent implements OnInit {
  orders: Order[] = [];
  filteredOrders: Order[] = [];
  selectedFilter = 'all';

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders(): void {
    // Sample orders data - replace with actual API call
    this.orders = [
      {
        id: 'ORD-2024-001',
        date: '2024-10-05',
        status: 'delivered',
        total: 45000,
        trackingNumber: 'TRK123456789',
        returnStatus: 'none',
        items: [
          {
            id: 1,
            name: 'Smartphone',
            image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=100&h=100&fit=crop',
            price: 25000,
            quantity: 1
          },
          {
            id: 2,
            name: 'Wireless Headphones',
            image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop',
            price: 8000,
            quantity: 1
          }
        ]
      },
      {
        id: 'ORD-2024-002',
        date: '2024-10-03',
        status: 'shipped',
        total: 75000,
        trackingNumber: 'TRK987654321',
        returnStatus: 'none',
        items: [
          {
            id: 3,
            name: 'Gaming Laptop',
            image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=100&h=100&fit=crop',
            price: 75000,
            quantity: 1
          }
        ]
      },
      {
        id: 'ORD-2024-003',
        date: '2024-09-28',
        status: 'delivered',
        total: 15000,
        trackingNumber: 'TRK456789123',
        returnStatus: 'requested',
        items: [
          {
            id: 4,
            name: 'Smart Watch',
            image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100&h=100&fit=crop',
            price: 15000,
            quantity: 1
          }
        ]
      },
      {
        id: 'ORD-2024-004',
        date: '2024-09-25',
        status: 'processing',
        total: 30000,
        returnStatus: 'none',
        items: [
          {
            id: 5,
            name: 'Tablet',
            image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=100&h=100&fit=crop',
            price: 30000,
            quantity: 1
          }
        ]
      }
    ];
    
    this.filteredOrders = [...this.orders];
  }

  filterOrders(filter: string): void {
    this.selectedFilter = filter;
    
    switch (filter) {
      case 'delivered':
        this.filteredOrders = this.orders.filter(order => order.status === 'delivered');
        break;
      case 'shipped':
        this.filteredOrders = this.orders.filter(order => order.status === 'shipped');
        break;
      case 'processing':
        this.filteredOrders = this.orders.filter(order => order.status === 'processing');
        break;
      case 'returns':
        this.filteredOrders = this.orders.filter(order => order.returnStatus && order.returnStatus !== 'none');
        break;
      default:
        this.filteredOrders = [...this.orders];
    }
  }

  trackOrder(order: Order): void {
    if (order.trackingNumber) {
      alert(`Tracking Order: ${order.id}\nTracking Number: ${order.trackingNumber}\nStatus: ${order.status.toUpperCase()}`);
    } else {
      alert('Tracking information not available yet.');
    }
  }

  viewOrderDetails(order: Order): void {
    alert(`Order Details:\nOrder ID: ${order.id}\nDate: ${order.date}\nTotal: ₹${order.total.toLocaleString()}\nItems: ${order.items.length}`);
  }

  startReturn(order: Order): void {
    if (order.status === 'delivered' && order.returnStatus === 'none') {
      // Simulate return request
      order.returnStatus = 'requested';
      alert(`Return request initiated for order ${order.id}. You will receive a confirmation email shortly.`);
    } else if (order.returnStatus && order.returnStatus !== 'none') {
      alert(`Return status: ${order.returnStatus.toUpperCase()}`);
    } else {
      alert('Returns are only available for delivered orders.');
    }
  }

  getStatusColor(status: string): string {
    switch (status) {
      case 'delivered': return '#27ae60';
      case 'shipped': return '#3498db';
      case 'processing': return '#f39c12';
      case 'cancelled': return '#e74c3c';
      default: return '#95a5a6';
    }
  }

  getReturnStatusColor(status: string | undefined): string {
    if (!status) return '#95a5a6';
    switch (status) {
      case 'requested': return '#f39c12';
      case 'approved': return '#3498db';
      case 'completed': return '#27ae60';
      default: return '#95a5a6';
    }
  }
}