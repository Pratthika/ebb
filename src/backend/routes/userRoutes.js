const express = require('express');
const router = express.Router();
const { getUsers } = require('../controllers/userController');

// Route to fetch users
router.get('/', getUsers); // Providing a callback function getUsers

module.exports = router;
