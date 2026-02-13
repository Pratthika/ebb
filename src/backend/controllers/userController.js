const connectDB = require('../db');
const bcrypt = require('bcrypt'); // Import bcrypt for password hashing
const User = require('../models/User');

// Controller function to register a new user
async function registerUser(req, res) {
  const { username, email, password } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    // Hash the password before storing it in the database
    const hashedPassword = await bcrypt.hash(password, 10); // Hashing with a salt of 10

    // Create a new user instance with the hashed password
    const newUser = new User({ username, email, password: hashedPassword });

    // Save the new user to the database
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

// Controller function to fetch all users
async function getUsers(req, res) {
  try {
    const db = await connectDB();
    const users = await db.collection('users').find({}).toArray();
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

// Export the functions
module.exports = { registerUser, getUsers };
