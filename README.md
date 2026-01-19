Complete MERN Authentication System

A robust and secure full-stack authentication system built using the MERN (MongoDB, Express, React, Node.js) stack. This project features high-level security with JWT, secure password resets, and automated email verification using OTPs.

🚀 Key Features
User Registration & Login: Secure signup and login flow with hashed passwords.

Email Verification: Automated verification emails sent upon registration with a 6-digit OTP.

Password Reset: Secure "Forgot Password" workflow using email-based OTP verification.

JWT Authentication: Secure sessions using JSON Web Tokens stored in HTTP-only cookies.

Protected Routes: User-specific dashboard and actions restricted to authenticated users.

Dynamic UI: Clean and modern interface built with React and Tailwind CSS.

Toast Notifications: Real-time feedback for all user actions (Success/Error).

Email Templates: Professionally styled HTML email templates for OTPs and welcome messages.

🛠️ Tech Stack
Frontend: React.js, Tailwind CSS, Axios, React Context API.

Backend: Node.js, Express.js.

Database: MongoDB (using Mongoose).

Authentication: JWT (JsonWebToken), Bcrypt.js (Password hashing).

Email Service: Nodemailer (for sending OTPs and verification emails).

Other Tools: Cookie-parser, Dotenv.

📂 Project Structure
Plaintext
├── backend
│   ├── controllers/   # Auth logic (Login, Signup, OTP, Reset)
│   ├── middleware/    # Auth verification middleware
│   ├── models/        # Database Schema (User Model)
│   ├── routes/        # API Endpoints
│   ├── config/        # DB and Email transporter config
│   └── server.js      # Main server file
├── frontend
│   ├── src
│   │   ├── components/# Reusable UI components
│   │   ├── context/   # AuthContext for global state
│   │   ├── pages/     # Login, Signup, Home, EmailVerify, ResetPassword
│   │   └── App.js     # Routes configuration
└── README.md

⚙️ Prerequisites
Node.js installed on your machine.

MongoDB Atlas account (or local MongoDB).

SMTP credentials (e.g., Gmail App Password or Mailtrap) for sending emails.

🚀 Getting Started

1. Clone the repository

git clone https://github.com/Farhank-16/Authentication.git
cd mern-auth-system

2. Backend Setup

cd backend
npm install

Create a .env file in the backend folder:

PORT=4000
MONGODB_URI=your_mongodb_atlas_uri   
JWT_SECRET=your_random_secret_key   
NODE_ENV=development   
SENDER_EMAIL=your_email@gmail.com   
SENDER_PASSWORD=your_email_app_password   

Run the server:
npm run server

3. Frontend Setup
cd frontend
npm install

Create a .env file in the frontend folder:

VITE_BACKEND_URL=http://localhost:4000

Run the app:
npm run dev

🛡️ Security Implementation
Passwords: Hashed using bcryptjs with salt rounds.

Tokens: jsonwebtoken is used to create secure access tokens.

Cookies: Tokens are stored in HTTP-only cookies to prevent XSS attacks.

Validation: OTPs are time-sensitive and stored in the database with expiration timestamps.
