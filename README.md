# 🛍️ NexusMart - E-Commerce Platform

A **full-featured e-commerce application** built with the **MERN stack** (MongoDB, Express, React, Node.js), designed to showcase expertise in modern full-stack web development.

---

## 📋 Table of Contents
- [Project Overview](#-project-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Installation & Setup](#-installation--setup)
- [API Endpoints](#-api-endpoints)
- [Database Models](#-database-models)
- [Authentication & Authorization](#-authentication--authorization)
- [How to Use](#-how-to-use)
- [Key Workflows](#-key-workflows)
- [Deployment](#-deployment)

---

## 🎯 Project Overview

**NexusMart** is a comprehensive e-commerce platform that enables users to:
- Browse and search products across multiple categories
- Add items to shopping cart and make purchases
- Manage user profiles and view order history
- For Admins: Manage products, categories, and users from an admin dashboard

This project demonstrates full-stack proficiency with:
- **Backend**: REST API with Node.js & Express
- **Frontend**: Dynamic UI with React & Ant Design
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT-based secure authentication
- **Security**: Password hashing with bcrypt, role-based access control

---

## ✨ Features

### 👤 User Features
- ✅ **User Authentication**: Register, Login, Password Recovery
- ✅ **Product Browsing**: View all products with filtering and search
- ✅ **Category Navigation**: Browse products by category
- ✅ **Product Details**: Detailed product information with descriptions
- ✅ **Shopping Cart**: Add/remove items from cart
- ✅ **User Dashboard**: View personal profile and order history
- ✅ **Order Management**: Track purchases and order status
- ✅ **Search Functionality**: Search products by keywords

### 🔐 Admin Features
- ✅ **Admin Dashboard**: Overview of platform statistics
- ✅ **Category Management**: Create and manage product categories
- ✅ **Product Management**: Create, edit, update, and delete products
- ✅ **Product Photos**: Upload and manage product images
- ✅ **Inventory Control**: Manage product stock quantities
- ✅ **User Management**: View all registered users
- ✅ **Orders View**: Monitor all orders and their status

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|-----------|---------|
| **React 18** | UI Library |
| **React Router v6** | Client-side routing |
| **Ant Design (antd)** | UI Component library |
| **Axios** | HTTP client for API calls |
| **Context API** | State management (auth, cart, search) |
| **React Icons** | Icon library |
| **React Hot Toast** | Toast notifications |
| **Braintree Drop-in** | Payment integration |

### Backend
| Technology | Purpose |
|-----------|---------|
| **Node.js** | JavaScript runtime |
| **Express.js** | Web framework |
| **MongoDB** | NoSQL database |
| **Mongoose** | MongoDB ODM |
| **JWT** | Authentication token |
| **bcrypt** | Password hashing |
| **Morgan** | HTTP request logger |
| **CORS** | Cross-Origin Resource Sharing |
| **Braintree SDK** | Payment processing |

### Development Tools
| Tool | Purpose |
|------|---------|
| **Nodemon** | Auto-restart Node server during development |
| **Concurrently** | Run frontend and backend simultaneously |
| **Dotenv** | Environment variable management |

---

## 📁 Project Structure

```
nexusmart-main/
│
├── server.js                 # Main Express server entry point
├── package.json              # Backend dependencies
│
├── config/
│   └── db.js                # MongoDB connection configuration
│
├── controllers/              # Business logic
│   ├── authController.js    # Authentication logic (register, login, forgot-password)
│   ├── categoryController.js # Category CRUD operations
│   └── productController.js # Product CRUD operations & search
│
├── models/                  # Mongoose schemas
│   ├── userModel.js        # User schema (name, email, password, role, contact)
│   ├── productModel.js     # Product schema (name, price, category, photo)
│   ├── categoryModel.js    # Category schema (name, slug)
│   └── orderModel.js       # Order schema (products, buyer, status)
│
├── routes/                 # API endpoints
│   ├── authRoute.js       # /api/v1/auth/* - Auth endpoint
│   ├── categoryRoutes.js  # /api/v1/category/* - Category endpoints
│   └── productRoutes.js   # /api/v1/product/* - Product endpoints
│
├── middlewares/           # Express middleware
│   └── authMiddleware.js  # JWT verification, role checking
│
├── helpers/              # Utility functions
│   └── authHelper.js     # Password hashing/comparison functions
│
└── client/               # React Frontend
    ├── package.json      # Frontend dependencies
    ├── public/           # Static files
    │   ├── index.html
    │   └── images/
    │
    └── src/
        ├── App.js        # Main React component with routing
        ├── index.js      # React entry point
        ├── App.css       # Global styles
        │
        ├── components/
        │   ├── Layout/       # Layout wrapper components
        │   │   ├── Layout.js
        │   │   ├── Header.js
        │   │   ├── Footer.js
        │   │   ├── AdminMenu.js
        │   │   └── UserMenu.js
        │   ├── Routes/       # Protected route components
        │   │   ├── Private.js     # User-only routes
        │   │   └── AdminRoute.js  # Admin-only routes
        │   ├── Form/         # Form components
        │   │   ├── SearchInput.js
        │   │   └── CategoryForm.js
        │   ├── Prices.js     # Price filter component
        │   └── Spinner.js    # Loading spinner
        │
        ├── pages/
        │   ├── HomePage.js          # Landing page
        │   ├── ProductDetails.js    # Individual product detail
        │   ├── Search.js            # Search results page
        │   ├── Categories.js        # All categories page
        │   ├── CategoryProduct.js   # Products by category
        │   ├── CartPage.js          # Shopping cart
        │   ├── About.js             # About page
        │   ├── Contact.js           # Contact page
        │   ├── Policy.js            # Policy page
        │   ├── Pagenotfound.js      # 404 page
        │   │
        │   ├── Auth/
        │   │   ├── Register.js      # User registration
        │   │   ├── Login.js         # User login
        │   │   └── ForgotPassword.js # Password recovery
        │   │
        │   ├── user/
        │   │   ├── Dashboard.js     # User dashboard
        │   │   ├── Orders.js        # User orders history
        │   │   └── Profile.js       # User profile management
        │   │
        │   └── Admin/
        │       ├── AdminDashboard.js    # Admin overview
        │       ├── CreateCategory.js    # Add new category
        │       ├── CreateProduct.js     # Add new product
        │       ├── UpdateProduct.js     # Edit product
        │       ├── Products.js          # View all products
        │       └── Users.js             # View all users
        │
        ├── context/              # Global state management (Context API)
        │   ├── auth.js          # Authentication state
        │   ├── cart.js          # Shopping cart state
        │   └── search.js        # Search state
        │
        ├── hooks/               # Custom React hooks
        │   └── useCategory.js   # Hook to fetch categories
        │
        └── styles/
            └── AuthStyles.css   # Authentication page styles
```

---

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v14+)
- npm or yarn
- MongoDB (local or Atlas)

### Step 1: Clone & Navigate
```bash
git clone <repository-url>
cd nexusmart-main
```

### Step 2: Backend Setup
```bash
# Install backend dependencies
npm install

# Create .env file in root directory
echo PORT=8080 > .env
echo DEV_MODE=development >> .env
echo MONGO_URL=mongodb://localhost:27017/nexusmart >> .env
echo JWT_SECRET=your_jwt_secret_key >> .env

# Start backend server
npm run server
```

### Step 3: Frontend Setup
```bash
# Navigate to client folder
cd client

# Install frontend dependencies
npm install

# Go back to root
cd ..
```

### Step 4: Run Development Mode
```bash
# From root directory - runs both frontend & backend concurrently
npm run dev
```

**Frontend**: http://localhost:3000  
**Backend**: http://localhost:8080  
**API Base**: http://localhost:8080/api/v1

---

## 📡 API Endpoints

### Authentication Routes (`/api/v1/auth`)
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/register` | User registration | ❌ |
| POST | `/login` | User login | ❌ |
| POST | `/forgot-password` | Reset password | ❌ |
| GET | `/user-auth` | Verify user token | ✅ |
| GET | `/admin-auth` | Verify admin token | ✅ Admin |
| PUT | `/profile` | Update user profile | ✅ |
| GET | `/test` | Test admin access | ✅ Admin |

### Category Routes (`/api/v1/category`)
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/` | Get all categories | ❌ |
| POST | `/create` | Create category | ✅ Admin |
| DELETE | `/:id` | Delete category | ✅ Admin |
| PUT | `/:id` | Update category | ✅ Admin |
| GET | `/get/:slug` | Get category by slug | ❌ |

### Product Routes (`/api/v1/product`)
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/` | Get all products | ❌ |
| GET | `/:slug` | Get product by slug | ❌ |
| POST | `/create` | Create product | ✅ Admin |
| PUT | `/:pid` | Update product | ✅ Admin |
| DELETE | `/:pid` | Delete product | ✅ Admin |
| POST | `/search` | Search products | ❌ |
| GET | `/photo/:pid` | Get product photo | ❌ |

---

## 💾 Database Models

### User Model
```javascript
{
  name: String,           // User full name
  email: String,          // Unique email (login credential)
  password: String,       // Hashed password (bcrypt)
  phone: String,          // Contact number
  address: Object,        // Delivery address
  answer: String,         // Security question answer
  role: Number,           // 0=User, 1=Admin (default: 0)
  timestamps: true        // createdAt, updatedAt
}
```

### Product Model
```javascript
{
  name: String,           // Product name
  slug: String,           // URL-friendly name (from slugify)
  description: String,    // Product details
  price: Number,          // Product price
  category: ObjectId,     // Reference to Category model
  quantity: Number,       // Stock quantity
  photo: {
    data: Buffer,         // Image binary data
    contentType: String   // MIME type (e.g., image/jpeg)
  },
  shipping: Boolean,      // Shipping available
  timestamps: true        // createdAt, updatedAt
}
```

### Category Model
```javascript
{
  name: String,           // Category name
  slug: String,           // URL-friendly name
  timestamps: true        // createdAt, updatedAt
}
```

### Order Model
```javascript
{
  products: [{
    _id: ObjectId,       // Product ID
    name: String,
    description: String,
    price: Number,
    quantity: Number,
    product: ObjectId    // Reference to Product
  }],
  payment: Object,        // Payment information
  buyer: ObjectId,       // Reference to User
  status: String,        // pending, shipped, delivered, cancelled
  timestamps: true       // createdAt, updatedAt
}
```

---

## 🔐 Authentication & Authorization

### JWT Flow
1. User registers/logins with email & password
2. Password is hashed with **bcrypt** before storing
3. On successful login, server generates **JWT token**
4. Token is sent to frontend and stored in **Context API**
5. Token is included in `Authorization` header for protected routes

### Role-Based Access Control (RBAC)
- **User (role: 0)**: Default role, can browse products, manage cart, view orders
- **Admin (role: 1)**: Can manage products, categories, users, view all orders

### Protected Routes
```javascript
// Middleware: requireSignIn
// Verifies JWT token from Authorization header

// Middleware: isAdmin
// Checks if user.role === 1, denies access otherwise
```

---

## 📊 Key Workflows

### User Registration & Login Flow
```
1. User fills registration form (name, email, password, phone, address, security question)
2. POST to /api/v1/auth/register
3. Backend validates data
4. Password hashed with bcrypt
5. User saved to MongoDB
6. Response with success/error message
   ↓
7. User enters login credentials
8. POST to /api/v1/auth/login
9. Backend finds user by email
10. Compares provided password with hashed password
11. If match: Generate JWT token
12. Token sent to frontend
13. Token stored in auth context
14. User redirected to home/dashboard
```

### Product Purchase Flow
```
1. User browses HomePage or uses Search
2. Selects category or searches for product
3. Views product details
4. Clicks "Add to Cart" → Updates cart context
5. Navigates to CartPage
6. Reviews items and enters shipping details
7. Proceeds to checkout
8. Makes payment (Braintree integration)
9. Order created in MongoDB (orderModel)
10. User sees order confirmation
11. User can track order in Dashboard > Orders
```

### Admin Product Management
```
1. Admin logs in with admin credentials (role: 1)
2. Navigates to AdminDashboard
3. Click "Create Product"
4. Fills form (name, price, category, description, photo)
5. POST to /api/v1/product/create
6. Backend saves product with photo (Buffer)
7. Generates URL-friendly slug
8. Product added to category
9. Product visible to all users on homepage
```

---

## 🌐 Deployment

### Backend (Node.js Server)
- Can be deployed on **Heroku**, **Vercel**, **Railway**, or any Node.js hosting
- Environment variables needed:
  ```
  MONGO_URL=<production-mongodb-atlas-url>
  JWT_SECRET=<strong-secret-key>
  PORT=<production-port>
  DEV_MODE=production
  ```

### Frontend (React Build)
- Build production bundle:
  ```bash
  cd client
  npm run build
  ```
- Deploy `build/` folder to **Vercel**, **Netlify**, or AWS S3 + CloudFront

### MongoDB
- Use **MongoDB Atlas** (cloud) for production
- Regular backups recommended
- Enable IP whitelist for security

---

## 🎓 Interview Talking Points

### Architecture & Design
- ✅ Full-stack MERN application with clear separation of concerns
- ✅ MVC pattern on backend (Models, Controllers, Routes)
- ✅ Modular React components with Context API for state
- ✅ JWT-based stateless authentication
- ✅ Role-based access control (RBAC)

### Key Technologies Used
- ✅ RESTful API design principles
- ✅ Password security with bcrypt hashing
- ✅ Database indexing with MongoDB (email unique index)
- ✅ Payment integration with Braintree
- ✅ Image handling with Buffer for product photos

### Scalability Considerations
- Context API is sufficient for current scope; Redux could be added for larger state
- Database indexing on frequently queried fields (email, category)
- Caching layer (Redis) could improve performance
- CDN for image delivery
- API rate limiting for security

---

## 📝 License
MIT

## 👨‍💻 Author
Created by **Aditya** | Full-Stack Developer

---

## 🤝 Contributing
Feel free to fork this project and submit pull requests with improvements!

---

## 📧 Contact & Support
For issues, questions, or suggestions, please create an issue in the repository.
