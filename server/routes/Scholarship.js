const express = require('express');
const { addScholarship } = require('../controllers/Scholarship.controller.js');

const router = express.Router();
//Add Scholarship
router.post('/addScholarship',addScholarship);

module.exports = router;
