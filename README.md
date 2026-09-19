# 🛒 GoMart

### AI-Powered Full-Stack E-Commerce Platform

**GoMart** is a modern, full-stack e-commerce platform built to explore real-world application development by combining **Full Stack Development, AI, 3D Web Experiences, Docker, AWS, and DevOps practices**.

> 🚧 **Status:** In Development

---

## 🌐 Overview

GoMart aims to provide a modern and intelligent shopping experience while serving as a practical exploration of how a production-style web application is designed, developed, containerized, deployed, and maintained.

The project combines:

**Full Stack + AI + 3D + Docker + AWS + DevOps**

into a single application.

---

## ✨ Core Features

### 🛍️ E-Commerce

* User registration and login
* Product browsing
* Product search
* Category filtering
* Product details
* Shopping cart
* Wishlist
* Checkout
* Order management
* Product reviews and ratings

### 🤖 AI-Powered Features

* AI shopping assistant
* Personalized product recommendations
* Natural-language product search
* Product comparison assistance
* AI-generated product insights

### 🧊 3D Experience

* Interactive 3D product models
* 360° product viewing
* Interactive product visualization
* Three.js / React Three Fiber integration

### 👨‍💼 Admin

* Admin dashboard
* Product management
* Inventory management
* Category management
* Order management
* User management

---

# 🛠️ Tech Stack

## Frontend

* React.js
* Vite
* JavaScript
* Tailwind CSS
* Three.js
* React Three Fiber

## Backend

* Node.js
* Express.js
* REST APIs

## Database

* MongoDB
* Mongoose

## AI

* AI / LLM API
* Recommendation system
* AI shopping assistant

## DevOps

* Docker
* Docker Compose
* Git
* GitHub
* CI/CD
* Environment management

## Cloud

* AWS
* AWS EC2
* AWS S3
* AWS IAM
* AWS CloudWatch

> AWS services may change as the project architecture evolves.

---

# 🏗️ Architecture

```text
                         ┌────────────────────┐
                         │       Users        │
                         └─────────┬──────────┘
                                   │
                                   ▼
                         ┌────────────────────┐
                         │ React + Vite       │
                         │ Frontend           │
                         └─────────┬──────────┘
                                   │
                              REST API
                                   │
                                   ▼
                         ┌────────────────────┐
                         │ Node + Express      │
                         │ Backend             │
                         └──────┬───────┬─────┘
                                │       │
                    ┌───────────┘       └───────────┐
                    ▼                               ▼
          ┌─────────────────┐             ┌─────────────────┐
          │    MongoDB      │             │   AI Services   │
          │    Database     │             │                 │
          └─────────────────┘             └─────────────────┘

                         Docker
                            │
                            ▼
                    Containerized App
                            │
                            ▼
                           AWS
                            │
              ┌─────────────┴─────────────┐
              ▼                           ▼
           Compute                     Storage
           / Hosting                    / Assets
```

---

# 🐳 Docker

GoMart will use Docker to containerize the application and create a consistent development and deployment environment.

### Planned Containers

```text
Frontend Container
       │
       ├── React
       └── Vite

Backend Container
       │
       ├── Node.js
       └── Express

Database
       │
       └── MongoDB
```

Docker Compose will be used to manage multiple services during development.

### Docker Goals

* Containerize frontend
* Containerize backend
* Configure multi-container development
* Manage environment variables
* Create reproducible environments
* Prepare the application for cloud deployment

---

# ☁️ AWS

GoMart will be deployed using AWS services as the project progresses.

### Planned AWS Services

| Service        | Purpose                |
| -------------- | ---------------------- |
| **EC2**        | Application hosting    |
| **S3**         | File/object storage    |
| **IAM**        | Access and permissions |
| **CloudWatch** | Monitoring and logs    |

Additional AWS services may be introduced as the architecture develops.

---

# ⚙️ DevOps

GoMart will also be used to learn and implement practical DevOps concepts.

### DevOps Roadmap

* [ ] Git workflow
* [ ] Docker
* [ ] Docker Compose
* [ ] Environment configuration
* [ ] CI/CD
* [ ] GitHub Actions
* [ ] AWS deployment
* [ ] Application monitoring
* [ ] Logging
* [ ] Deployment automation
* [ ] Production configuration

---

# 🔄 Development Workflow

```text
Developer
    │
    ▼
Git + GitHub
    │
    ▼
Development
    │
    ▼
Docker
    │
    ▼
Testing
    │
    ▼
CI/CD Pipeline
    │
    ▼
AWS
    │
    ▼
Production
```

---

# 📁 Project Structure

```text
GoMart/
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── Dockerfile
│   └── package.json
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── services/
│   ├── Dockerfile
│   └── package.json
│
├── ai/
│   ├── recommendations/
│   └── assistant/
│
├── compose.yaml
├── .gitignore
├── .dockerignore
└── README.md
```

---

# 🚀 Getting Started

## 1. Clone the repository

```bash
git clone <repository-url>
cd GoMart
```

## 2. Install dependencies

Install dependencies for both the frontend and backend.

```bash
cd frontend
npm install
```

```bash
cd ../backend
npm install
```

## 3. Configure environment variables

Create environment files for the required configuration.

Example:

```env
MONGO_URI=
JWT_SECRET=
AI_API_KEY=
```

Never commit sensitive credentials to GitHub.

## 4. Run the application

Start the frontend and backend using their respective development commands.

Docker-based development will be added as the containerized architecture is implemented.

---

# 🐳 Docker Setup

The project will support Docker-based development.

Initialize Docker configuration:

```bash
docker init
```

Build and run the application using Docker Compose:

```bash
docker compose up --build
```

Stop the containers:

```bash
docker compose down
```

---

# 📈 Development Roadmap

### Phase 1 — Foundation

* [x] Repository setup
* [ ] React + Vite setup
* [ ] Backend setup
* [ ] MongoDB connection
* [ ] Basic project architecture

### Phase 2 — E-Commerce

* [ ] Authentication
* [ ] Products
* [ ] Search
* [ ] Categories
* [ ] Cart
* [ ] Wishlist
* [ ] Checkout
* [ ] Orders
* [ ] Reviews

### Phase 3 — AI

* [ ] AI shopping assistant
* [ ] Product recommendations
* [ ] Natural-language search
* [ ] AI product comparison

### Phase 4 — 3D

* [ ] Three.js integration
* [ ] 3D product models
* [ ] Interactive product viewer

### Phase 5 — Docker

* [ ] Frontend container
* [ ] Backend container
* [ ] Docker Compose
* [ ] Production Docker configuration

### Phase 6 — DevOps

* [ ] GitHub Actions
* [ ] CI pipeline
* [ ] Automated testing
* [ ] CD pipeline
* [ ] Deployment automation

### Phase 7 — AWS

* [ ] AWS account/project setup
* [ ] IAM configuration
* [ ] Application deployment
* [ ] S3 integration
* [ ] CloudWatch monitoring
* [ ] Production deployment

---

# 🎯 Project Goals

GoMart is being developed to gain practical experience in:

* Full-stack application development
* REST API design
* Database management
* Authentication and authorization
* AI integration
* 3D web development
* Containerization
* Cloud deployment
* CI/CD
* DevOps practices
* Application monitoring

---

# 🔮 Future Improvements

Possible future improvements include:

* AI-powered visual search
* Voice-based shopping
* Advanced recommendation algorithms
* Real-time notifications
* Smart product comparison
* AI-generated product summaries
* Advanced analytics
* Automated CI/CD
* Scalable cloud architecture
* Performance optimization
* Security hardening

---

# 👨‍💻 Developer

**Abhijeet Kumar Jha**

Full-Stack Developer | Java DSA Enthusiast

---

## 📄 License

This project is being developed for learning, experimentation, and portfolio purposes.
