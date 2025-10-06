package com.example.ecommerce.controller;

import com.example.ecommerce.model.Product;
import com.example.ecommerce.repository.ProductRepository;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "*") // Allow all origins for testing
public class ProductController {
    
    private final ProductRepository productRepository;
    
    public ProductController(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }
    
    @GetMapping
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }
    
    @GetMapping("/{id}")
    public Product getProductById(@PathVariable Integer id) {
        return productRepository.findById(id).orElse(null);
    }
    
    @PostMapping
    public Product createProduct(@RequestBody Product product) {
        return productRepository.save(product);
    }
    
    @PostMapping("/update-images")
    public String updateProductImages() {
        // Update existing products with better image URLs
        productRepository.findAll().forEach(product -> {
            switch (product.getName()) {
                case "Smartphone":
                    product.setImageUrl("https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=300&fit=crop");
                    break;
                case "Laptop":
                    product.setImageUrl("https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=300&fit=crop");
                    break;
                case "Headphones":
                    product.setImageUrl("https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop");
                    break;
                case "Watch":
                    product.setImageUrl("https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop");
                    break;
                case "Camera":
                    product.setImageUrl("https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=300&h=300&fit=crop");
                    break;
            }
            productRepository.save(product);
        });
        return "Images updated successfully!";
    }
}