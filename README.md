# 🏠 Expert Home Services

<div align="center">

![Expert Home Services Logo](client/public/images/logo.png)

**A comprehensive platform connecting customers with expert home service providers**

[![Node.js](https://img.shields.io/badge/Node.js-v20.11.1-green.svg)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Database-green.svg)](https://www.mongodb.com/)
[![Express.js](https://img.shields.io/badge/Express.js-4.19.2-lightgrey.svg)](https://expressjs.com/)
[![License](https://img.shields.io/badge/License-ISC-blue.svg)](LICENSE)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Technology Stack](#-technology-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Setup](#environment-setup)
  - [Running the Application](#running-the-application)
- [API Documentation](#-api-documentation)
- [Screenshots](#-screenshots)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🌟 Overview

**Expert Home Services** is a full-stack web application that serves as a comprehensive platform for connecting customers with expert home service providers. The application enables users to discover, compare, and book professional home services with ease, featuring interactive data visualizations, category-based service browsing, and location-based service recommendations.

### Key Highlights

- 🔐 **Secure Authentication** - User registration, login, and password recovery
- 📊 **Data Visualization** - Interactive charts to compare services and providers
- 🗺️ **Location-Based Services** - Find the best services near you
- 📱 **Responsive Design** - Seamless experience across all devices
- 🎨 **Modern UI/UX** - Built with Ant Design and Tailwind CSS
- 🔔 **Email Notifications** - Automated email system for bookings and updates

---

## ✨ Features

### For Customers
- ✅ User registration and authentication
- ✅ Browse services by category
- ✅ Search and filter service providers
- ✅ View detailed service provider profiles
- ✅ Interactive charts for service comparison
- ✅ Location-based service recommendations
- ✅ Booking management
- ✅ Password recovery via email

### For Service Providers
- ✅ Provider registration and profile management
- ✅ Service listing and management
- ✅ Booking notifications
- ✅ Performance analytics

### Admin Features
- ✅ User management
- ✅ Service category management
- ✅ Provider verification
- ✅ Platform analytics and reporting

---

## 🛠️ Technology Stack

### Frontend
![React](https://img.shields.io/badge/Framework-React-blue)
![Tailwind](https://img.shields.io/badge/Framework-Tailwind-pink)
![Ant Design](https://img.shields.io/badge/Framework-Antd-blue)
![Bootstrap](https://img.shields.io/badge/Framework-Bootstrap-blue)
![Recharts](https://img.shields.io/badge/Chart-Recharts-pink)
![React Router](https://img.shields.io/badge/Router-React_Router-green)

- **React 18.3.1** - Modern UI library with hooks and functional components
- **Ant Design 5.16.5** - Enterprise-class UI design system
- **Tailwind CSS 3.3.5** - Utility-first CSS framework
- **Recharts 2.12.6** - Composable charting library for data visualization
- **React Router DOM 6.23.0** - Declarative routing for React
- **Redux & Redux Saga** - State management and side effects
- **Axios** - Promise-based HTTP client

### Backend
![Express](https://img.shields.io/badge/Framework-Express-blue)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-green)
![Mongoose](https://img.shields.io/badge/ODM-Mongoose-pink)
![JWT](https://img.shields.io/badge/Auth-JWT-red)
![Nodemailer](https://img.shields.io/badge/Email-Nodemailer-orange)

- **Node.js v20.11.1** - JavaScript runtime
- **Express.js 4.19.2** - Fast, minimalist web framework
- **MongoDB 7.0.0** - NoSQL database
- **Mongoose 8.3.3** - MongoDB object modeling
- **JSON Web Token** - Secure authentication
- **Bcrypt.js** - Password hashing
- **Nodemailer** - Email service integration
- **Multer** - File upload handling
- **Morgan** - HTTP request logger

### Development Tools
- **Nodemon** - Auto-restart development server
- **ESLint** - Code linting and quality
- **Prettier** - Code formatting
- **dotenv** - Environment variable management

---

## 📁 Project Structure

```
expert-home-services/
├── client/                      # Frontend React application
│   ├── public/                  # Static files
│   │   └── images/              # Image assets
│   ├── src/
│   │   ├── components/          # Reusable React components
│   │   ├── Layout/              # Layout components
│   │   ├── pages/               # Page components
│   │   │   ├── Login/
│   │   │   ├── Registration/
│   │   │   ├── ForgotPassword/
│   │   │   ├── ChangePassword/
│   │   │   └── VerifyOtp/
│   │   ├── dispatcher/          # Redux dispatchers
│   │   ├── images/              # Image resources
│   │   └── App.js               # Main App component
│   └── package.json
│
├── controller/                  # Backend controllers
├── router/                      # API routes
├── schemas/                     # MongoDB schemas
├── helper/                      # Utility functions
├── categoryImages/              # Category image storage
├── config.js                    # Configuration file
├── consts.js                    # Constants
├── index.js                     # Server entry point
├── .env                         # Environment variables
└── package.json                 # Backend dependencies
```

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v20.11.1 or higher)
- **npm** (10.2.4 or higher)
- **MongoDB** (v7.0.0 or higher)
- **Git**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Riteshpatil077/Expert-Home-Services
   cd expert-home-services
   ```

2. **Install backend dependencies**
   ```bash
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd client
   npm install
   cd ..
   ```

### Environment Setup

Create a `.env` file in the root directory with the following variables:

```env
# Server Configuration
PORT=5000
NODE_ENV=development
API_VERSION=/v1

# Database Configuration
DB_STRING=mongodb://localhost:27017/expert-home-services
# Or use MongoDB Atlas connection string:
# DB_STRING=mongodb+srv://username:password@cluster.mongodb.net/expert-home-services

# Authentication
SECREATE=your_jwt_secret_key_here

# Email Configuration (Gmail)
GMAIL=your-email@gmail.com
GMAIL_PASSWORD=your-app-specific-password

# Optional: For production deployment
# CLIENT_URL=http://localhost:3000
```

#### 📧 Gmail Configuration

To use Gmail for sending emails:
1. Enable 2-Factor Authentication on your Google Account
2. Generate an App Password:
   - Go to Google Account Settings → Security → 2-Step Verification → App passwords
   - Select "Mail" and your device
   - Copy the generated 16-character password
3. Use this password in the `GMAIL_PASSWORD` field

### Running the Application

#### Development Mode

**Option 1: Run both frontend and backend separately**

1. **Start the backend server**
   ```bash
   npm run start:dev
   ```
   Backend will run on [http://localhost:5000](http://localhost:5000)

2. **Start the frontend (in a new terminal)**
   ```bash
   npm run start:client
   ```
   Frontend will run on [http://localhost:3000](http://localhost:3000)

**Option 2: Run both concurrently**
```bash
npm start              # Start backend
npm run start:client   # Start frontend (in another terminal)
```

#### Production Mode

1. **Build the frontend**
   ```bash
   cd client
   npm run build
   cd ..
   ```

2. **Start the production server**
   ```bash
   npm start
   ```

---

## 📡 API Documentation

### Authentication Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/v1/auth/register` | Register a new user |
| POST | `/v1/auth/login` | User login |
| POST | `/v1/auth/forgot-password` | Request password reset |
| POST | `/v1/auth/verify-otp` | Verify OTP |
| POST | `/v1/auth/change-password` | Change user password |

### Service Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/v1/services` | Get all services |
| GET | `/v1/services/:id` | Get service by ID |
| POST | `/v1/services` | Create new service |
| PUT | `/v1/services/:id` | Update service |
| DELETE | `/v1/services/:id` | Delete service |

### Category Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/v1/categories` | Get all categories |
| GET | `/v1/categories/:id` | Get category by ID |
| POST | `/v1/categories` | Create new category |

### Booking Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/v1/bookings` | Get user bookings |
| POST | `/v1/bookings` | Create new booking |
| PUT | `/v1/bookings/:id` | Update booking status |

---

## 📸 Screenshots

> Add screenshots of your application here

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Style

- Follow the existing code style
- Run `npm run lint` before committing
- Use `npm run pretty` to format code

---

## 📝 Available Scripts

### Backend Scripts
```bash
npm start              # Start production server
npm run start:dev      # Start development server with nodemon
npm run start:client   # Start frontend development server
npm run pretty         # Format code with Prettier
```

### Frontend Scripts
```bash
npm start              # Start development server
npm run build          # Build for production
npm test               # Run tests
npm run lint           # Run ESLint
npm run lint-fix       # Fix ESLint errors
npm run pretty         # Format code with Prettier
```

---

## 🔒 Security

- Passwords are hashed using bcrypt
- JWT tokens for secure authentication
- Environment variables for sensitive data
- CORS enabled for API security
- Input validation and sanitization

---

## 🐛 Known Issues

- None at the moment

---

## 🗺️ Roadmap

- [ ] Add real-time chat between customers and providers
- [ ] Implement payment gateway integration
- [ ] Add review and rating system
- [ ] Mobile application (React Native)
- [ ] Multi-language support
- [ ] Advanced analytics dashboard
- [ ] Push notifications

---

## 📄 License

This project is licensed under the ISC License.

---

## 👥 Authors

**Your Name**
- GitHub: [Riteshpatil077](https://github.com/Riteshpatil077)
- Email: ritesh.patil.1115@gmail.com

---

## 🙏 Acknowledgments

- [React Documentation](https://reactjs.org/)
- [Express.js Documentation](https://expressjs.com/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Ant Design](https://ant.design/)
- [Tailwind CSS](https://tailwindcss.com/)

---_


