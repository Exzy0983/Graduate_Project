const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/userController');

// @route   POST api/users/register
// @desc    Register user
// @access  Public
router.post('/register', register);

// @route   POST api/users/login
// @desc    Authenticate user & get token
// @access  Public
router.post('/login', login);

module.exports = router;
