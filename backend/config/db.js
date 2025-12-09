const mongoose = require('mongoose');

module.exports = async (uri) => {
  try {
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('MongoDB connected');
  } catch (e) {
    console.error('DB connection error:', e);
    process.exit(1);
  }
};
