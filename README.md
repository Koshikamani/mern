# 🔐 MERN Stack Authentication App with JWT

A simple MERN (MongoDB, Express, React, Node) stack user authentication system using JWT (JSON Web Token).

Users can register and login securely. After login, the server returns a JWT token which is stored in the browser's `localStorage`.

---

## ⚙️ Technologies Used

- **Frontend**: React, React Router, Axios, Vite  
- **Backend**: Node.js, Express.js, Mongoose  
- **Authentication**: JWT (`jsonwebtoken`)  
- **Database**: MongoDB Atlas

---

## ⚙️ Setup Instructions

```bash
# Frontend Setup
cd client
npm init vite
npm install
npm run dev

# Backend Setup
cd server
npm install

# Create .env file in server directory
# and add the following:
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key

# Start Backend Server
node index.js
