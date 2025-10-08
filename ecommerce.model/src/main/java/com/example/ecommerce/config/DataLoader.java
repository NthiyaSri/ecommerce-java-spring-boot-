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
            // Create detailed smartphone - OPPO K13x style
            Product smartphone = new Product();
            smartphone.setName("OPPO K13x 5G 6000mAh and 45W SUPERVOOC Charger & AI");
            smartphone.setDescription("6000mAh Battery, 50MP AI Dual Camera, Dimensity 6300 Processor");
            smartphone.setPrice(12999.0);
            smartphone.setImageUrl("https://image.made-in-china.com/2f0j00sdGiAKcJPfoC/A18-5-Inch-Android-Smartphone-HD-Face-Global-Version-Mobile-Phone.webp");
            smartphone.setCategory("Electronics");
            smartphone.setInStock(true);
            smartphone.setRating(5);
            smartphone.setBrand("OPPO");
            smartphone.setModel("K13x 5G");
            smartphone.setOriginalPrice(16999.0);
            smartphone.setStockQuantity(15);
            smartphone.setWarranty("1 Year Manufacturer Warranty + 6 Months Extended Warranty");
            smartphone.setDeliveryInfo("Free delivery by 11 Oct, Saturday if ordered before 4:39 PM");
            smartphone.setDetailedDescription("Experience the power of OPPO K13x 5G with its massive 6000mAh battery that keeps you connected all day long. The 45W SUPERVOOC charging technology ensures you're never out of power for long. Capture life's moments with the advanced 50MP AI Dual Camera system, powered by cutting-edge AI technology for stunning photos in any lighting condition. The Dimensity 6300 processor delivers smooth performance for gaming, multitasking, and everyday use. With 5G connectivity, enjoy blazing-fast internet speeds and seamless streaming. The sleek design comes in multiple attractive colors to match your style.");
            smartphone.setSpecifications("Display: 16.94 cm (6.67 inch) HD+ Display, 120Hz Refresh Rate|Processor: MediaTek Dimensity 6300 Octa-core|RAM: 6 GB (Expandable up to 12GB with RAM Expansion)|Storage: 128 GB ROM, Expandable up to 2TB|Camera: 50MP + 2MP Dual Rear Camera, 8MP Front Camera|Battery: 6000 mAh with 45W SUPERVOOC Fast Charging|OS: ColorOS 14 based on Android 14|Connectivity: 5G, 4G VoLTE, Wi-Fi, Bluetooth 5.3, GPS|Security: Side-mounted Fingerprint Scanner, Face Unlock|SIM: Dual SIM (Nano + Nano)|Dimensions: 165.7 x 76.1 x 8.4 mm|Weight: 192g");
            smartphone.setFeatures("6000mAh Long-lasting Battery|45W SUPERVOOC Fast Charging|50MP AI Dual Camera System|Dimensity 6300 5G Processor|120Hz Smooth Display|RAM Expansion Technology|ColorOS 14 with Android 14|Dual SIM 5G Support|Side-mounted Fingerprint Scanner|Face Unlock Technology|Ultra-slim 8.4mm Design|Premium Build Quality");
            smartphone.setAdditionalImages("https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop,https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop,https://images.unsplash.com/photo-1580910051074-3eb694886505?w=400&h=400&fit=crop,https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=400&h=400&fit=crop");
            productRepository.save(smartphone);

            // Other products (simplified)
            Product laptop = new Product();
            laptop.setName("Laptop");
            laptop.setDescription("High-performance laptop for work and gaming");
            laptop.setPrice(75000.0);
            laptop.setImageUrl("https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=300&fit=crop");
            laptop.setCategory("Electronics");
            laptop.setInStock(true);
            laptop.setRating(5);
            productRepository.save(laptop);

            Product headphones = new Product();
            headphones.setName("Headphones");
            headphones.setDescription("Wireless noise-cancelling headphones");
            headphones.setPrice(8000.0);
            headphones.setImageUrl("https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop");
            headphones.setCategory("Electronics");
            headphones.setInStock(true);
            headphones.setRating(4);
            productRepository.save(headphones);

            Product watch = new Product();
            watch.setName("Smart Watch");
            watch.setDescription("Smart fitness watch with heart rate monitor");
            watch.setPrice(15000.0);
            watch.setImageUrl("https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop");
            watch.setCategory("Electronics");
            watch.setInStock(true);
            watch.setRating(4);
            productRepository.save(watch);

            Product camera = new Product();
            camera.setName("Camera");
            camera.setDescription("Digital camera with 4K video recording");
            camera.setPrice(45000.0);
            camera.setImageUrl("https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=300&h=300&fit=crop");
            camera.setCategory("Electronics");
            camera.setInStock(true);
            camera.setRating(5);
            productRepository.save(camera);
        }
    }
}