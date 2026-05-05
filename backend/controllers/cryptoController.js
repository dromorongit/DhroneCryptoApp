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

// @desc    Seed database with crypto data
// @route   POST /api/crypto/seed
// @access  Protected with seed secret
const seedCryptoData = async (req, res) => {
  try {
    // Check seed secret key
    const seedKey = req.headers['x-seed-key'];
    if (seedKey !== process.env.SEED_SECRET) {
      return res.status(401).json({
        success: false,
        message: 'Unauthorized: Invalid seed secret key'
      });
    }

    // Check if database already has crypto data
    const existingCount = await Crypto.countDocuments();
    
    if (existingCount > 0) {
      return res.status(400).json({
        success: false,
        message: 'Database is not empty. Clear existing data before seeding.',
        existingRecords: existingCount
      });
    }

    // Use the seed data from utils
    const cryptoData = [
      {
        name: 'Bitcoin',
        symbol: 'BTC',
        price: 881887.94,
        image: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
        change24h: 0.35,
        marketCap: 1730000000000,
        volume24h: 28000000000,
        description: 'The first decentralized digital currency.',
        isNew: false
      },
      {
        name: 'Ethereum',
        symbol: 'ETH',
        price: 26116.55,
        image: 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
        change24h: 0.95,
        marketCap: 378000000000,
        volume24h: 15000000000,
        description: 'A programmable blockchain for decentralized applications.',
        isNew: false
      },
      {
        name: 'Tether',
        symbol: 'USDT',
        price: 11.2,
        image: 'https://cryptologos.cc/logos/tether-usdt-logo.png',
        change24h: -0.02,
        marketCap: 110000000000,
        volume24h: 53000000000,
        description: 'A stablecoin designed to track the US dollar.',
        isNew: false
      },
      {
        name: 'XRP',
        symbol: 'XRP',
        price: 15.62,
        image: 'https://cryptologos.cc/logos/xrp-xrp-logo.png',
        change24h: 0.13,
        marketCap: 30000000000,
        volume24h: 1800000000,
        description: 'A digital asset focused on fast payments.',
        isNew: false
      },
      {
        name: 'BNB',
        symbol: 'BNB',
        price: 6935.99,
        image: 'https://cryptologos.cc/logos/bnb-bnb-logo.png',
        change24h: 0.1,
        marketCap: 90000000000,
        volume24h: 1200000000,
        description: 'A blockchain ecosystem asset.',
        isNew: false
      },
      {
        name: 'USD Coin',
        symbol: 'USDC',
        price: 11.2,
        image: 'https://cryptologos.cc/logos/usd-coin-usdc-logo.png',
        change24h: 0,
        marketCap: 33000000000,
        volume24h: 7000000000,
        description: 'A stablecoin designed for digital payments.',
        isNew: false
      },
      {
        name: 'Solana',
        symbol: 'SOL',
        price: 1875.45,
        image: 'https://cryptologos.cc/logos/solana-sol-logo.png',
        change24h: 4.83,
        marketCap: 68000000000,
        volume24h: 2900000000,
        description: 'A high-speed blockchain for scalable applications.',
        isNew: false
      },
      {
        name: 'Avalanche',
        symbol: 'AVAX',
        price: 421.3,
        image: 'https://cryptologos.cc/logos/avalanche-avax-logo.png',
        change24h: 3.25,
        marketCap: 16000000000,
        volume24h: 510000000,
        description: 'A fast smart contract platform.',
        isNew: true
      },
      {
        name: 'Chainlink',
        symbol: 'LINK',
        price: 178.9,
        image: 'https://cryptologos.cc/logos/chainlink-link-logo.png',
        change24h: 2.42,
        marketCap: 9500000000,
        volume24h: 430000000,
        description: 'A decentralized oracle network.',
        isNew: true
      },
      {
        name: 'Polygon',
        symbol: 'POL',
        price: 6.74,
        image: 'https://cryptologos.cc/logos/polygon-matic-logo.png',
        change24h: -1.15,
        marketCap: 7200000000,
        volume24h: 380000000,
        description: 'A scaling ecosystem for blockchain applications.',
        isNew: true
      }
    ];

    // Check for existing symbols to avoid duplicates
    const existingCryptos = await Crypto.find({}, 'symbol');
    const existingSymbols = new Set(existingCryptos.map(c => c.symbol.toUpperCase()));
    
    // Filter out any data that already exists by symbol
    const newData = cryptoData.filter(item => !existingSymbols.has(item.symbol.toUpperCase()));
    const skipped = cryptoData.length - newData.length;

    if (newData.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'No new data to seed. All crypto symbols already exist in the database.',
        existingRecords: existingCryptos.length
      });
    }

    // Insert new data
    const result = await Crypto.insertMany(newData);

    res.status(201).json({
      success: true,
      message: 'Crypto data seeded successfully',
      recordsInserted: result.length,
      skipped: skipped,
      totalRecords: existingCryptos.length + result.length,
      data: result
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to seed crypto data',
      error: error.message
    });
  }
};

module.exports = {
  getCryptos,
  getTopGainers,
  getNewListings,
  getCrypto,
  addCrypto,
  seedCryptoData
};