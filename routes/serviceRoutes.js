const express = require('express');
const Service = require('../models/Service');
const router = express.Router();

// Add a new service
router.post('/', async (req, res) => {
  const { name, description, price } = req.body;
  if (!name || !description || !price) {
    return res.status(400).json({ msg: 'Please include all fields' });
  }
  try {
    const newService = new Service({ name, description, price });
    const savedService = await newService.save();
    res.status(201).json(savedService);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Get all services
router.get('/', async (req, res) => {
  try {
    const services = await Service.find();
    res.status(200).json(services);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Update a service
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, description, price } = req.body;

  try {
    const service = await Service.findById(id);
    if (!service) return res.status(404).json({ msg: 'Service not found' });

    service.name = name || service.name;
    service.description = description || service.description;
    service.price = price || service.price;

    const updatedService = await service.save();
    res.status(200).json(updatedService);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Delete a service
router.delete('/:id', async (req, res) => {
  try {
      const service = await Service.findByIdAndDelete(req.params.id);
      if (!service) {
          return res.status(404).json({ message: 'Service not found' });
      }
      res.status(200).json({ message: 'Service deleted successfully' });
  } catch (error) {
      res.status(500).json({ message: 'Internal Server Error', error });
  }
});

module.exports = router;
