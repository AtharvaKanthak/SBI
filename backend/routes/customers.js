const express = require('express');
const router = express.Router();
const Customer = require('../models/Customer');

// Add new customer
router.post('/', async (req, res) => {
  try {
    const { name, location, email, mobile } = req.body;
    const newCustomer = new Customer({ name, location, email, mobile });
    await newCustomer.save();
    res.status(201).json(newCustomer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all customers
router.get('/', async (req, res) => {
  try {
    const customers = await Customer.find().sort({ createdAt: -1 });
    res.json(customers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
