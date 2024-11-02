const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Admin sign in
const signInAdmin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await User.findOne({ email, isAdmin: true });

    if (!admin) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isPasswordMatch = await bcrypt.compare(password, admin.password);

    if (!isPasswordMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: admin._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

    res.json({ _id: admin._id, name: admin.name, email: admin.email, token });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { signInAdmin };
