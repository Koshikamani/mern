# 🔐 MERN Stack Authentication App with JWT

This project is a basic **MERN (MongoDB, Express, React, Node)** stack user authentication system with **JWT (JSON Web Token)**.

Users can register and login securely. After successful login, the user receives a JWT token stored in `localStorage`.

---

## ⚙️ Technologies Used

- **Frontend**: React, React Router, Axios,Vite
- **Backend**: Node.js, Express.js, Mongoose
- **Auth**: JWT (jsonwebtoken)
- **Database**: MongoDB Atlas

---
## Frontend setup

**Step 1: Go to client directory**
  cd client
  
**step 2:choose language**
  npm init vite
  
**Step 3: Install dependencies**
npm install

**Step 4: Start React app**
  npm run dev

##Backend setup

**1.navigate to server**
cd server

**2.Install Dependecies**
npm install

**3.create .env file**
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_secret_key
**4.Start server**
node index.js

