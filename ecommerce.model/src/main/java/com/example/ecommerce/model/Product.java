package com.example.ecommerce.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    
    private String name;
    private String description;
    private Double price;
    private String imageUrl;
    private String category;
    private Boolean inStock = true;
    private Integer rating = 5;
    
    // Additional product details
    @Column(length = 2000)
    private String detailedDescription;
    
    @Column(length = 1000)
    private String specifications;
    
    @Column(length = 500)
    private String features;
    
    private String brand;
    private String model;
    private Double originalPrice;
    private Integer stockQuantity = 10;
    private String warranty;
    private String deliveryInfo;
    
    // Multiple images
    @Column(length = 1000)
    private String additionalImages;
}