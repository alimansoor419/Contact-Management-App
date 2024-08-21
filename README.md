# Contact Management App

A Node.js-based contact management application that utilizes MongoDB and Mongoose for database management. The application provides full CRUD functionality for contacts, user authentication with JWT, and protected routes to ensure data security.

## Features

- **User Registration & Authentication:**

  - User registration with password hashing.
  - JWT access token for secure login.
  - Protected routes to ensure only authenticated users can access their contacts.

- **Contact Management:**

  - Create, Read, Update, and Delete (CRUD) operations for contacts.
  - Each contact is linked to a specific user.
  - Users can manage only their own contacts.

- **Error Handling & Middleware:**
  - Custom error handling middleware.
  - Middleware for verifying JWT tokens.
  - Async handlers to streamline asynchronous operations.

## Technologies Used

- **Backend:**
  - Node.js
  - Express.js
  - Mongoose (ODM for MongoDB)
- **Database:**
  - MongoDB
- **Authentication:**
  - JSON Web Token (JWT)
- **Development Tools:**
  - Thunder Client for API testing

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/contact-management-app.git
   cd contact-management-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:

   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     ```

4. Start the server:
   ```bash
   npm start
   ```

## API Endpoints

### User Routes

- **POST /api/users/register** - Register a new user.
- **POST /api/users/login** - Login a user and return a JWT token.
- **GET /api/users/current** - Get the current logged-in user.

### Contact Routes

- **GET /api/contacts** - Get all contacts for the logged-in user.
- **POST /api/contacts** - Create a new contact for the logged-in user.
- **GET /api/contacts/:id** - Get a specific contact by ID.
- **PUT /api/contacts/:id** - Update a contact by ID.
- **DELETE /api/contacts/:id** - Delete a contact by ID.

## Project Structure

```
├── controllers
│   ├── contactController.js
│   └── userController.js
├── models
│   ├── contactModel.js
│   └── userModel.js
├── routes
│   ├── contactRoutes.js
│   └── userRoutes.js
├── middleware
│   ├── errorHandler.js
│   └── verifyToken.js
├── config
│   └── db.js
├── .env
├── server.js
└── README.md
```
