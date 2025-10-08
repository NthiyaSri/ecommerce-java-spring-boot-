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
}