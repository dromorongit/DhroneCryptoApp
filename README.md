# DhroneCryptoApp

A cryptocurrency tracking and trading platform built with React, TypeScript, Node.js, Express, and MongoDB.

## Project Structure

```
.
├── backend/              # Node.js + Express backend
│   ├── config/           # Database configuration
│   ├── controllers/      # Route controllers
│   ├── middleware/       # Custom middleware
│   ├── models/           # Mongoose models
│   ├── routes/           # API routes
│   ├── utils/            # Utility scripts
│   ├── .env.example      # Environment variables template
│   └── server.js         # Main server entry
├── public/               # Static assets
└── src/                  # React + TypeScript frontend
    ├── assets/           # Images and icons
    ├── components/       # React components
    ├── context/          # React context providers
    ├── data/             # Mock data and utilities
    ├── pages/            # Page components
    ├── services/         # API service layer
    └── App.tsx           # Main app component
```

## Features

- 📊 Real-time cryptocurrency market data
- 📈 Top gainers tracking
- 🆕 New listings monitoring
- 👤 User authentication (JWT)
- 🔒 Secure trading platform
- 🎨 Modern, responsive UI

## Prerequisites

- Node.js (v18+)
- npm or yarn
- MongoDB (local or MongoDB Atlas)

## Backend Setup

### 1. Install Dependencies

```bash
cd backend
npm install
```

### 2. Configure Environment Variables

Copy the example environment file:

```bash
cp .env.example .env
```

Edit `.env` and set your values:

```env
PORT=5000
NODE_ENV=development

# MongoDB Connection String
# Local:
MONGODB_URI=mongodb://localhost:27017/dhronecrypto

# MongoDB Atlas:
# MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.example.mongodb.net/dhronecrypto?retryWrites=true&w=majority

JWT_SECRET=your_secure_jwt_secret_here
JWT_EXPIRES_IN=7d
FRONTEND_URL=http://localhost:5173
```

### MongoDB Atlas Setup

1. Create a free MongoDB Atlas cluster at https://www.mongodb.com/atlas
2. Create a database user with read/write permissions
3. Whitelist your IP address (or use `0.0.0.0/0` for demo deployment)
4. Copy the connection string
5. Set `MONGODB_URI` in `backend/.env`

### 3. Seed Demo Data

```bash
cd backend
npm run seed
```

To clear existing data and reseed:

```bash
npm run seed:reset
```

### 4. Start Backend Server

Development mode:

```bash
npm run dev
```

Production mode:

```bash
npm start
```

The backend will be available at `http://localhost:5000`

### Backend API Endpoints

- `GET /api/health` - Health check
- `GET /api/crypto` - Get all cryptocurrencies
- `GET /api/crypto/gainers` - Get top gainers
- `GET /api/crypto/new` - Get new listings
- `GET /api/crypto/:id` - Get single cryptocurrency
- `POST /api/crypto` - Add new cryptocurrency (requires auth)

## Frontend Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

The frontend will be available at `http://localhost:5173`

## Available Pages

- `/` - Home page with market overview
- `/login` - User login
- `/register` - User registration
- `/profile` - User profile
- `/crypto` - All cryptocurrencies
- `/crypto/gainers` - Top gainers
- `/crypto/new` - New listings
- `/crypto/add` - Add new cryptocurrency (demo)

## Deployment

### Backend Deployment (Railway)

1. Connect your GitHub repository to Railway
2. Set environment variables in Railway dashboard
3. Deploy!

### Frontend Deployment (Netlify/Vercel)

1. Build the frontend:

```bash
npm run build
```

2. Deploy the `dist` folder

## Security Notes

- 🔐 JWT authentication for protected routes
- 🛡️ Password hashing with bcrypt
- 🚫 No sensitive data in client-side code
- 📋 Environment variables for configuration
- ⚠️ Demo application - not for production use

## Student Safety Compliance

This application includes:
- Student warning banner
- Footer disclaimer
- Demo password notice
- Educational purpose only

## Technologies Used

### Frontend
- React 18
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Bcrypt

## License

Educational project - DhroneCrypto App