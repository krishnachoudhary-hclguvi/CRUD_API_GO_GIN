# Go CRUD Application

A robust RESTful API built with Go (Golang) and the Gin web framework, featuring JWT authentication and MongoDB integration. This project demonstrates a complete CRUD (Create, Read, Update, Delete) workflow for managing users.

## 🚀 Features

- **RESTful API Architecture**: Clean and structured API endpoints.
- **framework**: Built on [Gin](https://github.com/gin-gonic/gin) for high performance.
- **Database**: [MongoDB](https://www.mongodb.com/) integration using the official Go driver.
- **Authentication**: Secure remote authentication using [JWT](https://jwt.io/) (JSON Web Tokens).
- **Security**: Password hashing with bcrypt.
- **Validation**: Request data validation using `go-playground/validator`.
- **Configuration**: Environment variable support via `godotenv`.
- **CORS Support**: Configured Middleware for handling Cross-Origin Resource Sharing.

## 🛠️ Tech Stack

- **Language**: Go 1.25+
- **Framework**: Gin Gonic
- **Database**: MongoDB Atlas / Local MongoDB
- **Authentication**: JWT & Bcrypt

## 📋 Prerequisites

Before running this project, ensure you have the following installed:

- [Go](https://go.dev/dl/) (version 1.25 or higher)
- [MongoDB](https://www.mongodb.com/try/download/community) (running locally or a cloud URI)
- Git

## ⚙️ Installation & Setup

1.  **Clone the repository**

    ```bash
    git clone https://github.com/krishnachoudhary-hclguvi/CRUD_API_GO_GIN.git
    cd CRUD_API_GO_GIN
    ```

2.  **Install dependencies**

    ```bash
    go mod tidy
    ```

3.  **Environment Configuration**

    Create a `.env` file in the root directory and add your configuration:

    ```env
    PORT=8080
    MONGO_URI=mongodb://localhost:27017
    DB_NAME=your_db_name
    JWT_SECRET=your_super_secret_key
    ```

4.  **Run the Application**

    ```bash
    go run main.go
    ```

    The server will start on `http://localhost:8080` (or your configured port).

## 🔌 API Endpoints

### Authentication

-   `POST /signup` - Register a new user
    -   Body: `{ "name": "John", "email": "john@example.com", "password": "securepassword" }`
-   `POST /login` - Authenticate user and get JWT
    -   Body: `{ "email": "john@example.com", "password": "securepassword" }`

### User Operations (Protected)

*Requires `Authorization: Bearer <token>` header*

-   `GET /users` - Get all users
-   `GET /users/:id` - Get a specific user by ID
-   `POST /users` - Create a new user (Admin function)
-   `PUT /users/:id` - Update an existing user
-   `DELETE /users/:id` - Delete a user

## 📂 Project Structure

```
├── config/         # Database connection configuration
├── controller/     # Request handlers (Auth, User logic)
├── middleware/     # Auth and CORS middleware
├── model/          # Data structures and database models
├── routes/         # API route definitions
├── utils/          # Utility functions (JWT generation/validation)
├── main.go         # Entry point
└── go.mod          # Dependencies
```

## 🤝 Contributing

Contributions are welcome! Please fork the repository and submit a Pull Request.

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
