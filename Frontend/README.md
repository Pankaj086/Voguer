# Voguer - E-commerce Fashion Platform

Voguer is a modern e-commerce platform specializing in fashion retail, providing a seamless shopping experience with a focus on quality and style.

## 📑 Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Architecture](#project-architecture)
- [Installation and Setup](#installation-and-setup)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Contributors](#contributors)

## 🔍 Project Overview

Voguer is a comprehensive fashion e-commerce platform that offers users the ability to browse, search, and purchase clothing items across various categories including Men's, Women's, and Kids' fashion. The platform provides a seamless shopping experience with features like user authentication, product filtering, cart management, order processing, and payment integration.

## ✨ Features

### User Features
- **User Authentication**: Secure login and registration system
- **Product Browsing**: Browse products by category, type, and size
- **Product Filtering**: Filter products by various criteria
- **Product Search**: Search functionality for finding specific items
- **Shopping Cart**: Add, update, and remove items from cart
- **Order Management**: Place and track orders
- **Payment Integration**: Multiple payment method options (COD, Stripe, Razorpay)
- **Responsive Design**: Optimized for desktop and mobile devices

### Admin Features
- **Product Management**: Add, edit, and remove products
- **Order Management**: View and update order status
- **Inventory Management**: Manage product stock

## 🛠 Tech Stack

### Frontend
- React.js with Vite
- Context API for state management
- React Router for navigation
- Tailwind CSS for styling
- Axios for API requests
- React Multi Carousel for sliders
- React Toastify for notifications
- Lucide React for icons

### Backend
- Node.js with Express.js
- MongoDB with Mongoose ODM
- JWT for authentication
- Bcrypt for password hashing
- Cloudinary for image storage
- Multer for file uploads
- Cookie-parser for cookie management

### Payment Gateways
- Stripe
- Razorpay

## 🏗 Project Architecture

The project follows a three-tier architecture:

1. **Frontend**: Client-side React application
2. **Backend API**: Express.js RESTful API
3. **Database**: MongoDB

### Directory Structure

```
Voguer/
├── Frontend/               # React client application
│   ├── src/
│   │   ├── assets/         # Static assets and images
│   │   ├── components/     # Reusable UI components
│   │   ├── context/        # Context API providers
│   │   ├── pages/          # Page components
│   │   └── utility/        # Helper functions and utilities
│   └── ...
├── Backend/                # Express API server
│   ├── config/             # Configuration files
│   ├── controllers/        # API controllers
│   ├── middleware/         # Custom middleware
│   ├── models/             # Database models
│   ├── routes/             # API routes
│   └── ...
└── Admin/                  # Admin panel (React)
    ├── src/
    │   ├── assets/         # Admin assets
    │   ├── components/     # Admin UI components
    │   ├── pages/          # Admin pages
    │   └── ...
    └── ...
```

## 🚀 Installation and Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- Git

### Frontend Setup
```bash
# Navigate to Frontend directory
cd Voguer/Frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

### Backend Setup
```bash
# Navigate to Backend directory
cd Voguer/Backend

# Install dependencies
npm install

# Create .env file with the following variables:
# PORT=5000
# MONGODB_URI=your_mongodb_connection_string
# JWT_SECRET=your_jwt_secret
# CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
# CLOUDINARY_API_KEY=your_cloudinary_api_key
# CLOUDINARY_API_SECRET=your_cloudinary_api_secret

# Start development server
npm run dev
```

### Admin Panel Setup
```bash
# Navigate to Admin directory
cd Voguer/Admin

# Install dependencies
npm install

# Start development server
npm run dev
```

## 💻 Usage

### User Flow
1. **Browse Products**: Navigate through different categories and collections
2. **Filter Products**: Use the filter options to narrow down product search
3. **Product Details**: Click on a product to view detailed information
4. **Add to Cart**: Select size and add products to shopping cart
5. **Checkout**: Proceed to checkout, enter shipping details
6. **Payment**: Select payment method and complete transaction
7. **Order Tracking**: Track order status in the "Orders" section

### Admin Flow
1. **Login**: Access the admin panel with admin credentials
2. **Manage Products**: Add, edit, and remove products
3. **Manage Orders**: View and update order status
4. **Inventory**: Monitor and update product stock levels

## 📚 API Documentation

### Authentication Endpoints
- `POST /api/v1/users/register`: Register a new user
- `POST /api/v1/users/login`: Login user and generate token
- `GET /api/v1/users/logout`: Logout user

### Product Endpoints
- `GET /api/v1/products`: Fetch all products
- `POST /api/v1/products/add`: Add a new product
- `GET /api/v1/products/info`: Get product information
- `DELETE /api/v1/products/remove`: Delete a product

### Cart Endpoints
- `POST /api/v1/cart/add`: Add product to cart
- `POST /api/v1/cart/update`: Update product quantity in cart
- `POST /api/v1/cart/remove`: Remove product from cart

### Order Endpoints
- `POST /api/v1/order`: Create a new order
- `GET /api/v1/order/userorders`: Get user orders

## 👥 Contributors

- [@pankaj086](https://www.linkedin.com/in/pankaj086) - Developer

## 📄 License

This project is licensed under the MIT License.
