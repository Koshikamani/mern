# 🔐 MERN Stack Authentication App with JWT

This project is a basic **MERN (MongoDB, Express, React, Node)** stack user authentication system with **JWT (JSON Web Token)**.

Users can register and login securely. After successful login, the user receives a JWT token stored in `localStorage`.

---

## ⚙️ Technologies Used

- **Frontend**: React, React Router, Axios
- **Backend**: Node.js, Express.js, Mongoose
- **Auth**: JWT (jsonwebtoken)
- **Database**: MongoDB Atlas

---

## 📁 Project Structure
project-root/
├── client/ # React frontend
│ └── src/
│ ├── Signup.jsx
│ ├── Login.jsx
│ ├── Home.jsx
│ ├── App.jsx
│ └── main.jsx
├── server/ # Express backend
│ ├── models/
│ │ └── employee.js
│ ├── index.js
│ └── .env
└── README.md
##frontend setup
# Step 1: Go to client directory
cd client

# Step 2: Install dependencies
npm install

# Step 3: Start React app
npm run dev

