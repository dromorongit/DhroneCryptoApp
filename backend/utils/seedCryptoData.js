const mongoose = require('mongoose');
const Crypto = require('../models/Crypto');
const connectDB = require('../config/db');

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

const seedData = async () => {
  try {
    await connectDB();
    
    // Clear existing data
    await Crypto.deleteMany();
    
    // Insert new data
    await Crypto.insertMany(cryptoData);
    
    console.log('Crypto data seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding data:', error);
    process.exit(1);
  }
};

seedData();