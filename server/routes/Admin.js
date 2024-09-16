const express = require('express');
const { registerAdmin, loginAdmin } = require('../controllers/Admin.controller.js');
const router = express.Router();

// Register admin route
router.post('/register', registerAdmin);
router.post('/login',loginAdmin)

module.exports = router;
