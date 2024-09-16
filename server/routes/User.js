const express = require('express');
const { registerUser, loginUser,AppliedScholarship } = require('../controllers/User.controller');
const router = express.Router();

// Register admin route
router.post('/register', registerUser);
router.post('/login',loginUser)
router.post('/Submited_application',AppliedScholarship)

module.exports = router;