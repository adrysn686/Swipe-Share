const express = require('express');
const router = express.Router();

// Placeholder routes - will be implemented later
router.get('/profile', (req, res) => {
  res.json({ message: 'User profile endpoint' });
});

module.exports = router;