const express = require('express');
const { registerUser, loginUser } = require('../controllers/User.controller');
const router = express.Router();

// Register admin route
router.post('/register', registerUser);
router.post('/login',loginUser)

module.exports = router;