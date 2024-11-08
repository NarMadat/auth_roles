# Authorization System

This project is an authorization system built using Node.js and Express, designed for secure user authentication and management. The system integrates MongoDB as the database, JWT (JSON Web Token) for secure token-based authentication, bcrypt for password hashing, and express-validator for input validation.

## Features
- **User Registration**: Securely register new users with input validation.
- **User Login**: Authenticate users using JWT tokens.
- **Password Hashing**: User passwords are securely stored using bcrypt.
- **Input Validation**: User input is validated using express-validator to ensure data integrity.
- **Token-Based Authentication**: Secure routes using JWT to maintain user sessions.

## Tech Stack
- **Node.js**: Backend runtime environment
- **Express.js**: Web framework for building the API
- **MongoDB**: Database for storing user data
- **JWT**: Used for secure authentication tokens
- **bcrypt**: For password hashing and salting
- **express-validator**: For input validation

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/authorization-system.git
   cd authorization-system
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   Create a `.env` file in the root directory and include the following variables:
   ```env
   PORT=5000
   MONGO_URI=your-mongodb-connection-string
   JWT_SECRET=your-jwt-secret
   ```
4. Start the server:
   ```bash
   npm start
   ```

## Usage

### Registration
- Send a POST request to `/api/register` with the following JSON payload:
  ```json
  {
    "username": "exampleUser",
    "email": "user@example.com",
    "password": "securePassword"
  }
  ```
- The system will validate input, hash the password, and store user details in MongoDB.

### Login
- Send a POST request to `/api/login` with the following JSON payload:
  ```json
  {
    "email": "user@example.com",
    "password": "securePassword"
  }
  ```
- The system will validate input, check credentials, and return a JWT token upon successful login.

### Protected Routes
- To access protected routes, include the JWT token in the `Authorization` header:
  ```
  Authorization: Bearer your-jwt-token
  ```

## Dependencies
- **express**
- **mongoose**
- **jsonwebtoken**
- **bcrypt**
- **express-validator**
- **dotenv**

## Contributing
Feel free to contribute to this project by submitting issues or pull requests.

## License
This project is licensed under the MIT License.

## Contact
For any questions or issues, please reach out to [your email/contact info].

