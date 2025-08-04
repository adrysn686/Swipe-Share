const express = require('express');
const router = express.Router();

// Placeholder routes - will be implemented later
router.get('/', (req, res) => {
  res.json({ message: 'Swipes endpoint' });
});

router.post('/', (req, res) => {
  res.json({ message: 'Create swipe endpoint' });
});

module.exports = router;