# 🏠 Expert Home Services

<div align="center">

![Expert Home Services Logo](https://img.icons8.com/clouds/200/home.png)

**Connect with professional home service experts in just a few clicks.**

[![Vercel](https://img.shields.io/badge/Deploy-Vercel-black.svg?logo=vercel)](https://vercel.com/)
[![Node.js](https://img.shields.io/badge/Node.js-v20.11.1-green.svg?logo=node.js)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-18.3.1-blue.svg?logo=react)](https://reactjs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Database-green.svg?logo=mongodb)](https://www.mongodb.com/)
[![Express.js](https://img.shields.io/badge/Express.js-4.19.2-lightgrey.svg?logo=express)](https://expressjs.com/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.3.5-38B2AC.svg?logo=tailwind-css)](https://tailwindcss.com/)
[![AntDesign](https://img.shields.io/badge/AntDesign-5.16.5-0170FE.svg?logo=ant-design)](https://ant.design/)

[Live Demo Placeholder](https://expert-home-services.vercel.app) • [API Docs](#-api-documentation) • [Report Bug](https://github.com/Riteshpatil077/Expert-Home-Services/issues)

</div>

---

## 🌟 Overview

**Expert Home Services** is a premium full-stack MERN application designed to bridge the gap between skilled service providers and customers. Whether you need a plumber, an electrician, or a deep-cleaning expert, our platform offers a seamless, secure, and data-driven experience to find the best help in your area.

### 🚀 Key Highlights

- 🔐 **Enterprise Authentication** - Secure JWT-based login, registration, and encrypted password storage.
- 📍 **Location Intelligence** - Powerful filtering by State and City (special focus on Kolhapur area).
- 📊 **Dynamic Dashboards** - Beautiful interactive charts and performance analytics for merchants.
- 📱 **Ultra Responsive** - Pixel-perfect design built with Tailwind CSS and Ant Design.
- 🛠️ **Service Management** - Full CRUD operations for categories and service listings.

---

## ✨ Features

### 👤 For Customers
- **Smart Discovery:** Browse services by category or location.
- **Detailed Profiles:** View provider experience, customer counts, and service descriptions.
- **Secure Access:** Easy registration and login with session persistence.
- **Password Recovery:** OTP-based password reset system via email.

### 💼 For Service Providers (Merchants)
- **Professional Presence:** Create and manage high-quality service listings.
- **Experience Tracking:** Display years of expertise and customer success metrics.
- **Dashboard Analytics:** Visual representation of service performance.

### 🛡️ Admin & Platform
- **Category Control:** Dynamic management of service types.
- **Location Database:** Structured State/City hierarchy for precise filtering.

---

## 🛠️ Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend** | React 18, Tailwind CSS, Ant Design, Recharts, Redux Saga, Axios |
| **Backend** | Node.js, Express.js, Morgan, Multer (File Uploads) |
| **Database** | MongoDB Atlas, Mongoose (ODM) |
| **Auth & Security** | JSON Web Tokens (JWT), Bcrypt.js, CORS |
| **Communication** | Nodemailer (Gmail SMTP Integration) |
| **Deployment** | Vercel (Optimized for Serverless) |

---

## 📁 Project Structure

```bash
expert-home-services/
├── client/              # React Frontend (Vite/CRA)
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── pages/       # Login, Registration, Dashboard
│   │   ├── Layout/      # Public & Protected Layouts
│   │   └── Context/     # Global State Management
├── controller/          # Backend Logic & Business Rules
├── router/              # Express API Route Definitions
├── schemas/             # Mongoose Models (User, Service, Category)
├── config.js            # Environment Configuration
├── index.js             # Entry Point (Vercel Ready)
└── vercel.json          # Deployment Configuration
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** v20+
- **MongoDB Atlas** account
- **Git**

### Installation

1. **Clone & Install Backend**
   ```bash
   git clone https://github.com/Riteshpatil077/Expert-Home-Services.git
   cd Expert-Home-Services
   npm install
   ```

2. **Install Frontend**
   ```bash
   cd client
   npm install
   cd ..
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:
   ```env
   DB_STRING=mongodb+srv://<user>:<password>@cluster.mongodb.net/dbname
   PORT=5000
   NODE_ENV=development
   SECREATE=your_super_secret_key
   GMAIL=your_email@gmail.com
   GMAIL_PASSWORD=your_app_password
   ```

4. **Seed Dummy Data**
   Populate your database with 50+ users and services in Kolhapur:
   ```bash
   node scratch/seed.js
   node scratch/seed-services.js
   ```

5. **Run Locally**
   ```bash
   npm run dev:all
   ```

---

## 📡 API Documentation

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/v1/login/registration` | Create a new account |
| `POST` | `/v1/login` | Authenticate and get token |
| `GET` | `/v1/categories` | Fetch all service categories |
| `GET` | `/v1/services` | List all available services |
| `POST` | `/v1/services` | Add a new service (Merchants only) |

---

## 📄 License
This project is licensed under the **ISC License**.

## 👥 Authors
- **Ritesh Patil** - [GitHub](https://github.com/Riteshpatil077)

---
<div align="center">
Built with ❤️ for the Expert Home Services Community
</div>
