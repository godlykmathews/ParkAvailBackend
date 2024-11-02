const express = require('express');
const router = express.Router();
const Parking = require('../models/ParkingSpot'); // Assuming ParkingSpot.js is in the same directory

// GET all parking spots
router.get('/parking', async (req, res) => {
  try {
    const parkingSpots = await Parking.find(); // Fetch all parking spots from the database
    res.json(parkingSpots); // Send the data as JSON response
  } catch (error) {
    res.status(500).json({ message: 'Error fetching parking spots' });
  }
});

// GET a specific parking spot by ID
router.get('/parking/:id', async (req, res) => {
  try {
    const parkingSpot = await Parking.findOne({ _id: req.params.id }); // Find a parking spot by ID
    if (!parkingSpot) {
      return res.status(404).json({ message: 'Parking spot not found' });
    }
    res.json(parkingSpot);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching parking spot' });
  }
});

// GET all parking spots by District
router.get('/parking/district/:district', async (req, res) => {
  try {
    const parkingSpots = await Parking.find({ district: req.params.district }); // Find parking spots by district
    if (parkingSpots.length === 0) {
      return res.status(404).json({ message: 'No parking spots found in this district' });
    }
    res.json(parkingSpots);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching parking spots' });
  }
});


module.exports = router;