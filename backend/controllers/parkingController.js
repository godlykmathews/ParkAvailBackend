const ParkingSpot = require('../models/ParkingSpot');

// Add parking spot (Admin only)
const addParkingSpot = async (req, res) => {
  const { name, location, availability, price, type } = req.body;

  // Validate required fields
  if (!name || !location || availability === undefined || !price || !type) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const newSpot = new ParkingSpot({
      name,
      location,
      availability,
      price,
      lat,
      lon,
      image,
      tslot,
      aslot,
      district
    });

    const savedSpot = await newSpot.save();
    res.status(201).json(savedSpot);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Get available parking spots
const getAvailableParkingSpots = async (req, res) => {
  try {
    const spots = await ParkingSpot.find({ availability: true });
    res.json(spots);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { addParkingSpot, getAvailableParkingSpots };