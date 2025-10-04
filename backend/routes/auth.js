const express = require('express');
const router = express.Router();

// Simple admin login with hardcoded password
const ADMIN_PASSWORD = 'admin123';

router.post('/login', (req, res) => {
  const { password } = req.body;
  if (password === ADMIN_PASSWORD) {
    res.json({ success: true, message: 'Login successful' });
  } else {
    res.status(401).json({ success: false, message: 'Invalid password' });
  }
});

module.exports = router;
