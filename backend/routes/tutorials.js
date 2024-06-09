const express = require('express');
const router = express.Router();

// Define your routes for tutorials here

// Example route
router.get('/', (req, res) => {
  res.send('Tutorials route');
});

module.exports = router;
