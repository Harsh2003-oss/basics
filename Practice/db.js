const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const dbName = 'myShop';

MongoClient.connect(url, (err, client) => {
  if (err) {
    console.log('❌ Could not connect!');
  } else {
    console.log('✅ Connected to MongoDB!');
    const db = client.db(dbName);
    console.log('We are inside:', dbName);
  }
});
