const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const cookieParser=require('cookie-parser');
const {requireAuth,checkUser}=require('./middleware/authMiddleware');

const app = express();

// middleware
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());

// view engine
app.set('view engine', 'ejs');

// database connection
// const dbURI = 'mongodb+srv://aiman:1234@cluster0.1vepeza.mongodb.net/smoothie-app?retryWrites=true&w=majority&appName=Cluster0';

// mongoose.connect(dbURI)
//   .then(() => app.listen(3000, () => console.log('Server running on port 3000')))
//   .catch(err => console.log(err));

require('dotenv').config();

const dbURI = process.env.MONGO_URI;
const PORT = process.env.PORT || 3000;

mongoose.connect(dbURI)
  .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
  .catch(err => console.log(err));

// routes
app.use(checkUser);
app.get('/', (req, res) => res.render('home'));
app.get('/smoothies',requireAuth, (req, res) => res.render('smoothies'));
app.use(authRoutes);

