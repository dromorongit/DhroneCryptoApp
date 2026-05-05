const mongoose = require('mongoose');

const cryptoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true
  },
  symbol: {
    type: String,
    required: [true, 'Symbol is required'],
    uppercase: true,
    trim: true,
    unique: true
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
    min: [0.01, 'Price must be greater than 0']
  },
  image: {
    type: String,
    required: [true, 'Image URL is required']
  },
  change24h: {
    type: Number,
    required: [true, '24h change is required']
  },
  marketCap: {
    type: Number
  },
  volume24h: {
    type: Number
  },
  description: {
    type: String
  },
  isNew: {
    type: Boolean,
    default: false
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Crypto', cryptoSchema);