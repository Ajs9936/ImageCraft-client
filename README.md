# ImageCraft - AI Image Generation Platform

A full-stack web application that enables users to generate AI-powered images with a credit-based system. Built with React, Vite, Node.js, Express, and MongoDB.

## 🎯 Features

- **AI Image Generation**: Generate high-quality images using AI technology
- **User Authentication**: Secure login and registration system
- **Credit System**: Buy and manage credits for image generation
- **Image History**: View and manage previously generated images
- **Responsive Design**: Mobile-friendly interface with Tailwind CSS
- **Real-time Notifications**: Toast notifications for user feedback
- **Payment Integration**: Razorpay integration for credit purchases

## 🏗️ Project Structure

```
ImageCraft/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Main application pages
│   │   ├── context/       # Global state management
│   │   ├── assets/        # Images and static assets
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── vite.config.js
│   └── package.json
│
└── server/                 # Node.js backend
    ├── routes/            # API routes
    ├── controllers/       # Business logic
    ├── models/           # MongoDB schemas
    ├── middlewares/      # Auth and utility middlewares
    ├── config/           # Database configuration
    ├── server.js
    └── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB
- Razorpay account (for payment integration)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ImageCraft
   ```

2. **Setup Backend**
   ```bash
   cd server
   npm install
   ```

   Create a `.env` file in the `server` directory:
   ```env
   PORT=5000
   MONGODB_URL=<your-mongodb-connection-string>
   JWT_SECRET=<your-jwt-secret>
   RAZORPAY_KEY_ID=<your-razorpay-key>
   RAZORPAY_KEY_SECRET=<your-razorpay-secret>
   VITE_BACKEND_URL=http://localhost:5000
   ```

3. **Setup Frontend**
   ```bash
   cd ../client
   npm install
   ```

   Create a `.env.local` file in the `client` directory:
   ```env
   VITE_BACKEND_URL=http://localhost:5000
   ```

### Running the Application

**Terminal 1 - Backend:**
```bash
cd server
npm run dev
```
The server will run on `http://localhost:5000`

**Terminal 2 - Frontend:**
```bash
cd client
npm run dev
```
The frontend will run on `http://localhost:5173` (or another available port)

## 📦 Tech Stack

### Frontend
- **React 19**: UI library
- **Vite**: Build tool and development server
- **Tailwind CSS**: Utility-first CSS framework
- **React Router DOM**: Client-side routing
- **Axios**: HTTP client for API calls
- **React Toastify**: Toast notifications
- **Motion**: Animation library

### Backend
- **Express.js**: Web framework
- **MongoDB**: NoSQL database
- **Mongoose**: MongoDB object modeling
- **JWT**: Authentication
- **Bcrypt**: Password hashing
- **Razorpay**: Payment processing
- **CORS**: Cross-origin resource sharing
- **Dotenv**: Environment variables

## 📋 Key Pages & Routes

| Route | Description |
|-------|-------------|
| `/` | Home page with image generation interface |
| `/result` | Display generated images |
| `/buy` | Purchase credits page |

## 🔐 Authentication

- User registration and login with JWT tokens
- Secure password storage using bcrypt
- Token stored in localStorage for persistence
- Protected routes and API endpoints

## 💳 Credit System

- Users purchase credits via Razorpay
- Each image generation consumes credits
- Credit balance tracked in real-time
- User profile displays current credit balance

## 📝 API Endpoints

### User Routes (`/api/user`)
- `POST /register` - Register new user
- `POST /login` - Login user
- `GET /credits` - Get user credits and profile
- `POST /buy-credits` - Purchase credits

### Image Routes (`/api/image`)
- `POST /generate` - Generate new image
- `GET /history` - Get user's image history
- `DELETE /:id` - Delete generated image

## 🛠️ Development

### Build for Production
```bash
npm run build
```

### Linting
```bash
npm run lint
```

### Preview Production Build
```bash
npm run preview
```

## 🤝 Contributing

1. Create a feature branch (`git checkout -b feature/AmazingFeature`)
2. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
3. Push to the branch (`git push origin feature/AmazingFeature`)
4. Open a Pull Request

## 📄 License

This project is licensed under the ISC License - see the LICENSE file for details.

## 🙋 Support

For support, please open an issue in the repository or contact the development team.
