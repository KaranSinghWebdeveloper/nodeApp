const express = require('express');
const { allUsers, insertUser, getUser, updateUser, deleteUser } = require('../Controllers/userController');
const userRoutes = express.Router();

// CRUD with users
userRoutes.get('/', allUsers).post('/', insertUser)
userRoutes.get('/:id', getUser).put('/:id', updateUser).delete('/:id', deleteUser)

module.exports = userRoutes;