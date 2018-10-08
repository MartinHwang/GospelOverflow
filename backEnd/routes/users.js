const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/user.controller');

// Getting users
router.get('', ctrlUser.getUserAll);

// Signin User
router.post('/login', ctrlUser.authenticate);

// Register User
router.post('/register', ctrlUser.addUser);

// Get User Profile
//router.get('/userProfile', ctrlUser.getUserProfile);

module.exports = router;