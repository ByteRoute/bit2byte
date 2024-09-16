const express = require('express');
const { registerUser, loginUser, test, logout} = require('../controllers/User.controller');
const router = express.Router();

// Register admin route
router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/test',test);
router.post('/logout',logout);

module.exports = router;