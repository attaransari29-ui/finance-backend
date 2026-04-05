# 💰 Finance Data Processing Backend

---

## 📌 Project Overview

This project is a **backend system for a Finance Dashboard** that manages financial records, user roles, and provides analytics such as income, expenses, and net balance.

It is designed using **clean architecture principles**, secure authentication, and role-based access control.

---

## 🎯 Objective

To build a backend system that:

* Handles financial data efficiently
* Provides secure access using JWT authentication
* Implements role-based authorization
* Offers API endpoints for dashboard analytics

---

## 🚀 Tech Stack

| Technology | Usage                 |
| ---------- | --------------------- |
| Node.js    | Runtime environment   |
| Express.js | Backend framework     |
| MongoDB    | Database              |
| Mongoose   | ODM                   |
| JWT        | Authentication        |
| dotenv     | Environment variables |

---

## 📂 Project Structure

```
finance-backend/
│
├── src/
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── recordController.js
│   │   └── dashboardController.js
│   │
│   ├── models/
│   │   ├── User.js
│   │   └── Record.js
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── recordRoutes.js
│   │   └── dashboardRoutes.js
│   │
│   ├── middleware/
│   │   ├── authMiddleware.js
│   │   └── roleMiddleware.js
│   │
│   ├── config/
│   │   └── db.js
│
├── server.js
├── package.json
├── .env (not included in repo)
└── README.md
```

---

## 🔐 Authentication & Authorization

### Authentication:

* JWT (JSON Web Token)
* Token required in headers:

```
Authorization: <token>
```

### Roles:

* **Admin**

  * Full access (Create, Update, Delete)
* **Analyst**

  * View records & dashboard
* **Viewer**

  * Limited access

---

## 📡 API Endpoints

---

### 🔐 Auth APIs

#### Register

```
POST /api/auth/register
```

#### Login

```
POST /api/auth/login
```

---

### 💰 Records APIs

#### Create Record (Admin Only)

```
POST /api/records
```

#### Get Records (Admin / Analyst)

```
GET /api/records
```

#### Update Record

```
PUT /api/records/:id
```

#### Delete Record

```
DELETE /api/records/:id
```

---

### 📊 Dashboard API

#### Get Summary

```
GET /api/dashboard/summary
```

---

## 🧾 Sample Data

### ➤ Record Example

```
{
    "amount": 5000,
    "type": "expense",
    "category": "Food",
    "date": "2026-04-05T00:00:00.000Z",
    "notes": "Dinner",
    "createdBy": "69d209be1c0b41095baae2b2",
    "_id": "69d29c542520abe0091144ff",
    "createdAt": "2026-04-05T17:31:00.051Z",
    "updatedAt": "2026-04-05T17:31:00.051Z",
    "__v": 0
}
```

---

## 📊 Output Example

### Dashboard Summary Response

```
{
 "income": 25000,
    "expense": 5000,
    "net": 20000
}
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository

```
git clone https://github.com/YOUR_USERNAME/finance-backend.git
cd finance-backend
```

---

### 2️⃣ Install Dependencies

```
npm install
```

---

### 3️⃣ Create .env File

```
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/financeDB
JWT_SECRET=your_secret_key
```

---

### 4️⃣ Run Server

```
node server.js
```

OR

```
npm run dev
```

---

## 🧪 Testing APIs (Postman)

### Steps:

1. Register user
2. Login → Get token
3. Add token in headers:

```
Authorization: <token>
```

4. Test all APIs

---

## ⚠️ Common Errors & Fixes

### ❌ Invalid Token

✔ Add token in Authorization header correctly

---

### ❌ CastError: ObjectId failed

✔ Replace `:id` with actual MongoDB ID

Example:

```
PUT /api/records/69d211e9d1b5492fca84ed66
```

---

### ❌ Server Crash

✔ Check:

* MongoDB running
* Correct .env values

---

## 🧠 Business Logic

* Income & Expense calculated dynamically
* Net = Income - Expense
* Data filtered based on user roles
* Only Admin can modify records

---

## 🔒 Security Features

* JWT Authentication
* Role-based Authorization
* Protected Routes
* Environment Variables

---

## 📌 Assumptions

* Users are assigned roles manually or during registration
* No frontend included (backend-only project)
* All APIs tested using Postman

---

## 📈 Future Enhancements

* Add frontend (React / Mobile App)
* Add pagination & filters
* Export reports (PDF/Excel)
* Add charts & analytics
* Deploy on cloud (AWS / Render)

---

## ✅ Project Status

✔ Completed
✔ Fully Functional
✔ Tested with Postman
✔ Follows backend best practices

---

## 👨‍💻 Author

**Attar Ansari**

---

## 🏁 Conclusion

This project demonstrates:

* Strong backend development skills
* API design & implementation
* Secure authentication system
* Real-world financial data handling

---

⭐ If you like this project, feel free to use or improve it!
