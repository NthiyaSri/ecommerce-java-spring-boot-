# 🛒 Ecommerce Web Application

A full-stack ecommerce application built with **Spring Boot** (backend) and **Angular** (frontend).

![Ecommerce Store](https://img.shields.io/badge/Status-Working-brightgreen)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.5.6-brightgreen)
![Angular](https://img.shields.io/badge/Angular-18-red)
![MySQL](https://img.shields.io/badge/MySQL-8.0-blue)

##  Features

- ✅ **Product Catalog** - Browse products with images and details
- ✅ **Responsive Design** - Works on desktop and mobile
- ✅ **REST API** - Full CRUD operations
- ✅ **Real Images** - Beautiful product photos from Unsplash
- ✅ **Auto Data Loading** - Sample products loaded automatically
- ✅ **Modern UI** - Clean design with hover effects

## 📁 Project Structure

```
├── ecommerce.model/        
│   ├── src/main/java/com/example/ecommerce/
│   │   ├── EcommerceApplication.java
│   │   ├── model/Product.java
│   │   ├── repository/ProductRepository.java
│   │   ├── controller/ProductController.java
│   │   └── config/DataLoader.java
│   └── src/main/resources/application.properties
├── ecommerce-frontend/     
│   ├── src/app/
│   │   ├── product-list/
│   │   ├── product.service.ts
│   │   └── app.component.*
│   └── package.json
├── ecommerce-simple.html     
└── README.md

##  Prerequisites

-  **Java 17+**
-  **Node.js 18+**
- **MySQL 8.0+**
-  **Maven 3.6+**
-  **Angular CLI**

## ⚡ Quick Start





#### 1. 🗄️ Database Setup
```sql
CREATE DATABASE ecommerce;
```
Update credentials in `ecommerce.model/src/main/resources/application.properties`

#### 2. 🍃 Backend Setup (Spring Boot)
```bash
cd ecommerce.model
mvn clean compile
mvn spring-boot:run
```
 Backend runs on: **http://localhost:8080**

3.  Frontend Setup (Angular)
```bash
cd ecommerce-frontend
npm install
ng serve --port 4203
```
🌐 Frontend runs on: **http://localhost:4203**

#### 4. 🧪 Test Everything
Open `test-api-endpoints.html` to verify all connections work properly.

## 🔗 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/products` | Get all products |
| `GET` | `/api/products/{id}` | Get product by ID |
| `POST` | `/api/products` | Create new product |
| `POST` | `/api/products/update-images` | Update product images |


## 🔧 Technologies Used

### Backend
- 🍃 **Spring Boot 3.5.6**
- 🗄️ **Spring Data JPA**
- 🐬 **MySQL**
- 🔧 **Lombok**
- ☕ **Java 17**

### Frontend
-  **Angular 18**
-  **TypeScript**
-  **RxJS**
-  **CSS3**

## 📸 Screenshots

The application features a modern, responsive design with:
- Clean product grid layout
- Hover effects on product cards
- Professional styling
- Mobile-friendly interface


##  Author

**NthiyaSri**
- GitHub: [@NthiyaSri](https://github.com/NthiyaSri)

---
⭐ **Star this repo if you found it helpful!**
