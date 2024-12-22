const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const uri = process.env.DB;

mongoose.connect(uri)
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch(err => console.log('Error connecting to MongoDB:', err));


module.exports = mongoose;
