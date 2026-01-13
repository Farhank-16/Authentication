MERN Stack Authentication SystemA complete, production-ready authentication system built using the MERN stack 
(MongoDB, Express, React, Node.js). This project implements secure user registration, login, email verification,
and password reset functionality using JSON Web Tokens (JWT) and OTP verification via email. 

🚀 Features
User Authentication: Secure Sign Up, Login, and Logout.
Email Verification: Account verification using a 6-digit OTP sent to the user's email.
Password Reset: Secure "Forgot Password" flow with OTP-based verification.
Secure Storage: Passwords are encrypted using bcryptjs.
Token-based Auth: Uses JSON Web Tokens (JWT) stored in HTTP-only cookies for secure session management.
Responsive UI: Built with React and styled with Tailwind CSS (as shown in the UI demo).
Email Templates: Professional HTML email templates for OTPs and welcome messages.

🛠️ Tech Stack
Frontend: React.js, Tailwind CSS, Axios
Backend: Node.js, Express.js
Database: MongoDB (Atlas)
Authentication: JWT (JSON Web Tokens), Bcrypt.js
Email Service: Nodemailer (integrated with email templates)

📋 Prerequisites
Before you begin, ensure you have the following installed:
Node.js (v14+)
npm or yarn
MongoDB Atlas Account

⚙️ Installation & Setup
1. Clone the Repository
git clone <your-repo-url>
cd mern-auth-system

2. Backend Setup
Navigate to the server directory and install dependencies:
cd server
npm install

Create a .env file in the server folder and add your credentials:
Code snippet
PORT=4000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
SENDER_EMAIL=your_email_address
SENDER_PASSWORD=your_email_app_password

Start the backend server:
npm run dev

3. Frontend Setup
Navigate to the client directory and install dependencies:
cd client
npm install

Start the React development server:
npm run dev

📂 Project Structure:
mern-auth-project/
├── client/                 # React Frontend (Vite)
│   ├── public/             # Static assets (logo, etc.)
│   ├── src/
│   │   ├── assets/         # Icons and Images
│   │   ├── components/     # Reusable UI components (Navbar, Header)
│   │   ├── context/        # AppContext for Global State (Auth status, User data)
│   │   ├── pages/          # Page views
│   │   │   ├── Login.jsx   # Handles Sign Up / Login toggle
│   │   │   ├── Home.jsx    # Landing page
│   │   │   └── EmailVerify.jsx # OTP Input page
│   │   ├── App.jsx         # Routing & Main logic
│   │   └── main.jsx        # Entry point
│   ├── .env                # Client-side environment variables
│   ├── index.html
│   ├── package.json
│   └── tailwind.config.js  # Styling configuration
│
├── server/                 # Node.js Backend
│   ├── config/             # Configuration files
│   │   ├── db.js           # MongoDB connection logic
│   │   └── nodemailer.js   # Email transporter setup
│   ├── controllers/        # Business logic for routes
│   │   ├── authController.js # Signup, Login, Logout, OTP Logic
│   │   └── userController.js # Get User Data
│   ├── middleware/         # Security & Protection
│   │   └── userAuth.js     # JWT verification middleware
│   ├── models/             # Database Schemas
│   │   └── userModel.js    # User schema with OTP fields
│   ├── routes/             # API Endpoints
│   │   ├── authRoutes.js   # Auth related routes
│   │   └── userRoutes.js   # User profile related routes
│   ├── utils/              # Helper functions
│   │   └── emailTemplates.js # HTML templates for OTP emails
│   ├── .env                # Backend secrets (DB URI, JWT Secret, SMTP)
│   ├── package.json
│   └── server.js           # Entry point (Server initialization)
│
└── README.md               # Documentation

🔑 Key API Endpoints
Method        Endpoint                          Description
POST        /api/auth/register              Create a new account
POST        /api/auth/login                 Authenticate user & get token
POST        /api/auth/logout                Clear auth cookies
POST        /api/auth/send-verify-otp       Send verification OTP to email
POST        /api/auth/verify-account        Verify email with OTP
POST        /api/auth/send-reset-otp        Send password reset OTP
POST        /api/auth/reset-password        Update password using OTP
