const Crypto = require('../models/Crypto');

// @desc    Get all cryptocurrencies
// @route   GET /api/crypto
// @access  Public
const getCryptos = async (req, res) => {
  try {
    const cryptos = await Crypto.find().sort({ marketCap: -1, createdAt: -1 });
    res.json({
      success: true,
      count: cryptos.length,
      data: cryptos
    });
  } catch (error) {
    // Return empty data if MongoDB is not connected
    res.json({
      success: true,
      count: 0,
      data: []
    });
  }
};

// @desc    Get top gainers
// @route   GET /api/crypto/gainers
// @access  Public
const getTopGainers = async (req, res) => {
  try {
    const gainers = await Crypto.find({ change24h: { $gt: 0 } })
      .sort({ change24h: -1 })
      .limit(10);
    res.json({
      success: true,
      count: gainers.length,
      data: gainers
    });
  } catch (error) {
    // Return empty data if MongoDB is not connected
    res.json({
      success: true,
      count: 0,
      data: []
    });
  }
};

// @desc    Get new listings
// @route   GET /api/crypto/new
// @access  Public
const getNewListings = async (req, res) => {
  try {
    const newListings = await Crypto.find({ isNew: true })
      .sort({ createdAt: -1 });
    res.json({
      success: true,
      count: newListings.length,
      data: newListings
    });
  } catch (error) {
    // Return empty data if MongoDB is not connected
    res.json({
      success: true,
      count: 0,
      data: []
    });
  }
};

// @desc    Get single cryptocurrency
// @route   GET /api/crypto/:id
// @access  Public
const getCrypto = async (req, res) => {
  try {
    const crypto = await Crypto.findById(req.params.id);
    
    if (!crypto) {
      res.status(404);
      throw new Error('Cryptocurrency not found');
    }
    
    res.json({
      success: true,
      data: crypto
    });
  } catch (error) {
    if (error.name === 'CastError') {
      res.status(404);
      throw new Error('Cryptocurrency not found');
    }
    res.status(500);
    throw new Error('Failed to fetch cryptocurrency');
  }
};

// @desc    Add new cryptocurrency
// @route   POST /api/crypto
// @access  Private
const addCrypto = async (req, res) => {
  const { name, symbol, price, image, change24h, marketCap, volume24h, description, isNew } = req.body;

  // Validation
  if (!name || !symbol || !price || !image || change24h === undefined) {
    res.status(400);
    throw new Error('Please provide name, symbol, price, image, and change24h');
  }

  if (price <= 0) {
    res.status(400);
    throw new Error('Price must be greater than 0');
  }

  // Check if symbol already exists
  const existingCrypto = await Crypto.findOne({ symbol: symbol.toUpperCase() });
  if (existingCrypto) {
    res.status(400);
    throw new Error('Cryptocurrency with this symbol already exists');
  }

  // Create crypto
  const crypto = await Crypto.create({
    name,
    symbol: symbol.toUpperCase(),
    price,
    image,
    change24h,
    marketCap,
    volume24h,
    description,
    isNew: isNew || false,
    createdBy: req.user ? req.user._id : null
  });

  res.status(201).json({
    success: true,
    message: 'Cryptocurrency added successfully',
    data: crypto
  });
};

module.exports = {
  getCryptos,
  getTopGainers,
  getNewListings,
  getCrypto,
  addCrypto
};