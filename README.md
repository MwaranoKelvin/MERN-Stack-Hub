# 📚 MERN Stack Student API

A robust RESTful API built with **Express.js** and **MongoDB** for managing student records. This project demonstrates best practices in Node.js backend development, including modular structure, environment configuration, and database integration using **Mongoose**.

---

## 🚀 Features

- **CRUD Operations:** Create, Read, Update, and Delete student records
- **MongoDB Integration:** Seamless connection using Mongoose
- **Environment Variables:** Secure configuration with dotenv
- **Modular Codebase:** Organized for scalability and maintainability
- **Error Handling:** Consistent API error responses

---

## 🗂️ Project Structure

```
├── config/
│   └── db.js
├── models/
│   └── Student.js
├── routes/
│   └── studentRoutes.js
├── server.js
├── package.json
├── .env.example
└── README.md
```

---

## ⚡ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/) (local or Atlas)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/MwaranoKelvin/ExpressJS-MERN.git
   cd ExpressJS-MERN
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Configure environment variables:**
   - Copy `.env.example` to `.env`
   - Add your MongoDB connection string and desired port:
     ```
     MONGO_URI=your_mongodb_connection_string
     PORT=5000
     ```

### Running the Server

- **Development mode (with nodemon):**
  ```sh
  npm run dev
  ```
- **Production mode:**
  ```sh
  npm start
  ```

---

## 📡 API Endpoints

| Method | Endpoint           | Description                |
|--------|--------------------|----------------------------|
| GET    | `/students`        | Retrieve all students      |
| POST   | `/students`        | Add a new student          |
| PUT    | `/students/:id`    | Update student by ID       |
| DELETE | `/students/:id`    | Remove student by ID       |

### Example Request

```sh
curl -X POST http://localhost:5000/students \
  -H "Content-Type: application/json" \
  -d '{"name":"Kelvin Mwarano","age":21,"course":"Computer Science"}'
```

---

## 🛡️ Environment Variables

See `.env.example` for required configuration.

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## 📄 License

This project is licensed under the ISC License.

---

## 💡 Author

Developed by Kelvin Mwarano.  
Feel free to reach out for collaboration or questions!