const mongoose = require('mongoose');

const dbName = 'ParkingApp';
const dbURI = `mongodb+srv://workgkm:thisisgkm@clusterparkingapp.htl7b.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=ClusterParkingApp`;

const connectDB = async () => {
  try {
    await mongoose.connect(dbURI);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Database connection failed:', error);
    process.exit(1);
  }
};

module.exports = connectDB;