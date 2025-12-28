Blendify — Secure Authentication System (MERN Stack)

Blendify is a secure authentication and session management system built using Node.js, Express.js, MongoDB, JWT, and EJS.
The project demonstrates how modern web applications handle user authentication, authorization, and protected routes.
This system can serve as a base authentication layer for scalable MERN applications.

🚀 Key Features
User registration, login, and logout functionality
Secure JWT-based authentication using HTTP-only cookies
Session management with express-session and connect-mongo
Password hashing and secure credential storage
Protected routes accessible only to authenticated users
Server-rendered frontend using EJS templates
Flash messages for user feedback

🔐 Authentication & Security
Password hashing using industry-standard practices
JWT tokens for stateless authentication
Cookie-based token storage for enhanced security
Environment variables used to protect sensitive data

🧰 Tech Stack
Frontend
EJS
HTML5
CSS3
Backend
Node.js
Express.js
Database
MongoDB (Atlas)

Authentication & Tools
JSON Web Tokens (JWT)
express-session
connect-mongo
cookie-parser
dotenv
method-override

📁 Project Structure
The application follows a clean and modular structure:

routes/
controllers/
models/
views/
public/
middleware/

⚙️ Installation & Setup
1. Clone the Repository
git clone https://github.com/UmyAiman/node-express-jwt-auth.git
cd node-express-jwt-auth
2. Install Dependencies
npm install
3. Environment Variables

Create a .env file in the root directory and add:
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=3000

4. Run the Application
node app.js

The application will run at:
http://localhost:3000

🔄 User Authentication Flow
User registers with email and password
Password is hashed and stored securely in MongoDB
On login, credentials are verified and a JWT is issued
JWT is stored in cookies for session handling

Authenticated users can access protected routes (e.g., /smoothies)
