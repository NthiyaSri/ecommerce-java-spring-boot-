package com.example.ecommerce.config;

import com.example.ecommerce.model.Product;
import com.example.ecommerce.repository.ProductRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements CommandLineRunner {

    private final ProductRepository productRepository;

    public DataLoader(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        if (productRepository.count() == 0) {
            // Add sample products
            productRepository.save(new Product(null, "Smartphone", "Latest Android smartphone with 128GB storage",
                    25000.0, "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=300&fit=crop"));
            productRepository.save(new Product(null, "Laptop", "High-performance laptop for work and gaming", 75000.0,
                    "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=300&fit=crop"));
            productRepository.save(new Product(null, "Headphones", "Wireless noise-cancelling headphones", 8000.0,
                    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop"));
            productRepository.save(new Product(null, "Watch", "Smart fitness watch with heart rate monitor", 15000.0,
                    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop"));
            productRepository.save(new Product(null, "Camera", "Digital camera with 4K video recording", 45000.0,
                    "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=300&h=300&fit=crop"));
        }
    }
}