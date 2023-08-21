const express = require('express');
const router = express.Router();
const Subscription = require('../models/subscription');

router.post('/', async (req, res) => {
  try {
    const newSubscription = new Subscription(req.body);
    await newSubscription.save();
    res.status(201).json({ message: 'Subscription saved successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to save subscription' });
  }
});

module.exports = router;