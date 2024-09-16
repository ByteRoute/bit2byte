const express = require('express');
const { registerAdmin, loginAdmin, approved, Disapproved, updateScholarshipStatus } = require('../controllers/Admin.controller.js');
const router = express.Router();

// Register admin route
router.post('/register', registerAdmin);
router.post('/login',loginAdmin);
router.post('update',updateScholarshipStatus)

module.exports = router;
