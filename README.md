# GoMart 🛒

GoMart is an AI-powered full-stack e-commerce application built to provide a modern online shopping experience.

The project is being developed with a focus on **MERN stack development, AI integration, authentication, and scalable application architecture**.

## 🚀 Tech Stack

### Frontend
- React
- Vite
- Tailwind CSS
- React Router
- Axios
- Lucide React

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcryptjs

### AI
- AI-powered shopping features planned/in development

### DevOps & Deployment
- Docker *(planned / learning integration)*
- Vercel
- Render
- Git & GitHub

## 📁 Project Structure

```text
Gomart/
├── Frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── data/
│   │   └── assets/
│   ├── package.json
│   └── vite.config.js
│
├── Backend/
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
│
├── .gitignore
└── README.md
```

## ✨ Planned Features

- 🛍️ Product browsing and shopping
- 🔎 Product search and filtering
- 🛒 Shopping cart
- 👤 User authentication
- 🔐 JWT-based authorization
- 🔑 Forgot/reset password
- 🌐 Google authentication
- 🤖 AI-powered e-commerce features
- 💳 Payment integration
- 📦 Order management
- 📱 Responsive UI
- 🐳 Docker containerization
- ☁️ Cloud deployment

## 🐳 Docker

Docker will be used to containerize the GoMart application as the project moves toward production-ready deployment.

Planned architecture:

```text
User
  ↓
Frontend Container
  ↓
Backend Container
  ↓
MongoDB
```

Planned Docker setup:

```text
Gomart/
├── Frontend/
│   └── Dockerfile
├── Backend/
│   └── Dockerfile
├── docker-compose.yml
└── README.md
```

> Docker is currently part of the future DevOps/learning roadmap, rather than a required part of the current development setup.

## 🔧 Local Development

### Frontend

```bash
cd Frontend
npm install
npm run dev
```

Frontend runs by default on: `http://localhost:5173`

### Backend

```bash
cd Backend
npm install
npx nodemon server.js
```

Backend runs on: `http://localhost:5000`

## 🔗 Application Architecture

```text
React + Vite
     │
     │ Axios
     ↓
Node.js + Express
     │
     │ Mongoose
     ↓
MongoDB
```

## 🎯 Project Goal

GoMart is being developed as a practical full-stack project to strengthen skills in:

- React
- JavaScript
- Node.js
- Express.js
- MongoDB
- REST APIs
- Authentication
- AI integration
- Docker and deployment

## 👨‍💻 Developer

**Abhijeet Kumar Jha**
Aspiring Software Developer | MERN Stack | Java | DSA

GitHub: [`abhijeetjha2005`](https://github.com/abhijeetjha2005)

---

⭐ This project is actively being developed and features will be added progressively.
