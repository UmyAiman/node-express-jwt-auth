🛡️ Node Express JWT Authentication
A Full-Stack Authentication System built using Node.js, Express.js, MongoDB, and JWT.
It provides secure user registration, login, and session management with cookies and tokens — just like modern web apps.

🚀 Features
🔐 User Authentication – Register, Login, and Logout functionality
🍪 JWT + Cookies – Secure authentication with JSON Web Tokens
💾 MongoDB Integration – Store user data safely in MongoDB Atlas
🧠 Session Handling – Using express-session and connect-mongo
⚙️ Environment Variables – Manage secrets easily with .env
🖼️ EJS Layouts – Simple and responsive frontend with EJS templates
💬 Flash Messages – Instant feedback for user actions

🧰 Tech Stack
Frontend: EJS, HTML, CSS
Backend: Node.js, Express.js
Database: MongoDB
Authentication: JWT, Cookies, express-session
Other Tools: dotenv, method-override, connect-mongo, cookie-parser

⚙️ How to Run Locally
Clone the repository
git clone https://github.com/UmyAiman/node-express-jwt-auth.git
cd node-express-jwt-auth

**Install dependencies**
npm install
Create .env file
MONGODB_URI=your_mongo_connection_string
JWT_SECRET=your_secret_key
PORT=5000

**Run the project**
node app.js
Your app will run on http://localhost:5000

🔒 Sample User Flow
User registers with email and password
Server stores hashed password in MongoDB
On login, server verifies credentials and sends JWT token
JWT is stored in cookies for authentication
Protected routes become accessible
