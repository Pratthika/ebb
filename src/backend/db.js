const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017/ebloodbank'; // Your MongoDB URI

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectDB() {
  try {
    await client.connect();
    console.log('Connected to the database');
    return client.db();
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
}

module.exports = connectDB;
