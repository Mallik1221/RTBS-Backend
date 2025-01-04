const express = require('express');
const router = express.Router();
const { signup, login, protect } = require('../controllers/authController');

// Public routes
router.post('/signup', signup);
router.post('/login', login);

// Protected route example
router.get('/me', protect, (req, res) => {
  res.json(req.user);
});

module.exports = router;