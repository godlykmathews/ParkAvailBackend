const mongoose = require('mongoose');

const parkingSpotSchema = mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  lat: { type: Number, required: true },
  lon: { type: Number, required: true },
  availability: { type: Boolean, required: true, default: false },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  tslots: { type: Number, required: true},
  aslots: { type: Number, required: true},
  description: { type: String, required: true},
  district: { type: String, required: true }

}, { timestamps: true });

const ParkingSpot = mongoose.model('parkingspots', parkingSpotSchema);

module.exports = ParkingSpot;