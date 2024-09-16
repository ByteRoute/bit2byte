const express = require('express');
const { createChat, getChatHistory, sendMessage } = require('../controllers/Chat.contoller');
const router = express.Router();

// Register admin route
router.post('/createChat', createChat);
router.post('/sendMessage', sendMessage)
router.get('/getChatHistory', getChatHistory)


module.exports = router;