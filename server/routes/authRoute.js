const express = require('express');
const { register, login } = require('../controllers/authController');
// const { router } = require('express');

const router = express.Router();

// Register Route
router.post('/register', register);

// Login Route
router.post('/login', login);


module.exports = router;
