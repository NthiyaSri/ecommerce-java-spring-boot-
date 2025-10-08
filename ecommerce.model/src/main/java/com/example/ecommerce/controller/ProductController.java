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
    public List<Product> getAllProducts(@RequestParam(required = false) String category) {
        if (category != null && !category.isEmpty()) {
            return productRepository.findByCategory(category);
        }
        return productRepository.findAll();
    }
    
    @GetMapping("/categories")
    public List<String> getCategories() {
        return productRepository.findDistinctCategories();
    }
    
    @GetMapping("/{id}")
    public Product getProductById(@PathVariable Integer id) {
        return productRepository.findById(id).orElse(null);
    }
    
    @PostMapping
    public Product createProduct(@RequestBody Product product) {
        return productRepository.save(product);
    }
    
    @PostMapping("/update-smartphone-details")
    public String updateSmartphoneDetails() {
        // Find and update the smartphone with detailed information
        List<Product> smartphones = productRepository.findByName("Smartphone");
        if (!smartphones.isEmpty()) {
            Product smartphone = smartphones.get(0);
            smartphone.setBrand("TechPro");
            smartphone.setModel("TP-X1 Pro");
            smartphone.setOriginalPrice(30000.0);
            smartphone.setStockQuantity(15);
            smartphone.setWarranty("2 years manufacturer warranty");
            smartphone.setDeliveryInfo("Free delivery in 2-3 business days");
            smartphone.setDetailedDescription("Experience the future with our latest Android smartphone featuring a stunning 6.7-inch AMOLED display, powerful octa-core processor, and advanced camera system. Perfect for photography enthusiasts, gamers, and professionals who demand the best performance.");
            smartphone.setSpecifications("Display: 6.7-inch AMOLED, 120Hz|Processor: Snapdragon 8 Gen 2|RAM: 8GB|Storage: 128GB|Camera: 108MP Triple Camera|Battery: 5000mAh|OS: Android 14|5G Ready");
            smartphone.setFeatures("5G Connectivity|Wireless Charging|Water Resistant IP68|Face Unlock|Fingerprint Scanner|Dual SIM|Fast Charging 65W");
            smartphone.setAdditionalImages("https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop,https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop,https://images.unsplash.com/photo-1580910051074-3eb694886505?w=400&h=400&fit=crop");
            productRepository.save(smartphone);
            return "Smartphone details updated successfully!";
        }
        return "Smartphone not found!";
    }

    @PostMapping("/reload-data")
    public String reloadData() {
        // Clear existing data and reload with new structure
        productRepository.deleteAll();
        
        // Helper method to create products
        productRepository.save(createProduct("Smartphone", "Latest Android smartphone with 128GB storage", 25000.0, 
                "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=300&fit=crop", "Electronics", 5));
        productRepository.save(createProduct("Laptop", "High-performance laptop for work and gaming", 75000.0,
                "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=300&fit=crop", "Electronics", 5));
        productRepository.save(createProduct("Headphones", "Wireless noise-cancelling headphones", 8000.0,
                "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop", "Electronics", 4));
        productRepository.save(createProduct("Smart Watch", "Smart fitness watch with heart rate monitor", 15000.0,
                "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop", "Electronics", 4));
        productRepository.save(createProduct("Camera", "Digital camera with 4K video recording", 45000.0,
                "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=300&h=300&fit=crop", "Electronics", 5));
        productRepository.save(createProduct("Tablet", "10-inch tablet perfect for work and entertainment", 30000.0,
                "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=300&h=300&fit=crop", "Electronics", 4));
        productRepository.save(createProduct("Gaming Console", "Next-gen gaming console with 4K support", 50000.0,
                "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=300&h=300&fit=crop", "Electronics", 5));
        productRepository.save(createProduct("Wireless Speaker", "Portable Bluetooth speaker with premium sound", 5000.0,
                "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=300&fit=crop", "Electronics", 4));
        productRepository.save(createProduct("Smart TV", "55-inch 4K Smart TV with streaming apps", 65000.0,
                "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=300&h=300&fit=crop", "Electronics", 5));
        productRepository.save(createProduct("Wireless Earbuds", "True wireless earbuds with noise cancellation", 12000.0,
                "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=300&h=300&fit=crop", "Electronics", 4));
        
        // Fashion & Accessories
        productRepository.save(createProduct("Leather Jacket", "Premium genuine leather jacket for men", 8500.0,
                "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300&h=300&fit=crop", "Fashion", 4));
        productRepository.save(createProduct("Designer Handbag", "Elegant designer handbag for women", 15000.0,
                "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=300&h=300&fit=crop", "Fashion", 5));
        productRepository.save(createProduct("Running Shoes", "Professional running shoes with advanced cushioning", 6500.0,
                "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop", "Fashion", 4));
        productRepository.save(createProduct("Sunglasses", "UV protection sunglasses with polarized lenses", 3500.0,
                "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300&h=300&fit=crop", "Fashion", 4));
        productRepository.save(createProduct("Backpack", "Waterproof travel backpack with laptop compartment", 4500.0,
                "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop", "Fashion", 4));
        
        // Home & Kitchen
        productRepository.save(createProduct("Coffee Machine", "Automatic espresso coffee machine", 25000.0,
                "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=300&h=300&fit=crop", "Home & Kitchen", 5));
        productRepository.save(createProduct("Air Purifier", "HEPA air purifier for clean indoor air", 18000.0,
                "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop", "Home & Kitchen", 4));
        productRepository.save(createProduct("Blender", "High-speed blender for smoothies and shakes", 7500.0,
                "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=300&h=300&fit=crop", "Home & Kitchen", 4));
        productRepository.save(createProduct("Desk Lamp", "LED desk lamp with adjustable brightness", 2500.0,
                "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=300&h=300&fit=crop", "Home & Kitchen", 4));
        productRepository.save(createProduct("Plant Pot", "Ceramic plant pot with drainage system", 1200.0,
                "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=300&h=300&fit=crop", "Home & Kitchen", 3));
        
        // Sports & Fitness
        productRepository.save(createProduct("Yoga Mat", "Non-slip yoga mat for exercise and meditation", 2000.0,
                "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=300&h=300&fit=crop", "Sports & Fitness", 4));
        productRepository.save(createProduct("Dumbbell Set", "Adjustable dumbbell set for home workouts", 8000.0,
                "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop", "Sports & Fitness", 4));
        productRepository.save(createProduct("Bicycle", "Mountain bike with 21-speed gear system", 35000.0,
                "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop", "Sports & Fitness", 5));
        productRepository.save(createProduct("Tennis Racket", "Professional tennis racket with carbon fiber", 12000.0,
                "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=300&h=300&fit=crop", "Sports & Fitness", 4));
        
        // Books & Education
        productRepository.save(createProduct("Programming Book", "Complete guide to Java programming", 1500.0,
                "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=300&fit=crop", "Books & Education", 5));
        productRepository.save(createProduct("Notebook Set", "Premium leather-bound notebook collection", 2500.0,
                "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=300&fit=crop", "Books & Education", 4));
        
        return "Data reloaded successfully with " + productRepository.count() + " products!";
    }
    
    private Product createProduct(String name, String description, Double price, String imageUrl, String category, Integer rating) {
        Product product = new Product();
        product.setName(name);
        product.setDescription(description);
        product.setPrice(price);
        product.setImageUrl(imageUrl);
        product.setCategory(category);
        product.setInStock(true);
        product.setRating(rating);
        product.setStockQuantity(10);
        return product;
    }
}