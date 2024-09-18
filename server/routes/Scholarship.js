const express = require('express');
const {addScholarship} = require('../controllers/Scholarship.controller.js');
const {getAllScholarships, getSpecificScholarship} = require("../controllers/Scholarship.controller");

const router = express.Router();
//Add Scholarship
router.post('/addScholarship', addScholarship);
router.get('/getAllScholarships', getAllScholarships);
router.post('/getSpecificScholarship', getSpecificScholarship);

module.exports = router;
