const express = require('express');
const {
  getCryptos,
  getTopGainers,
  getNewListings,
  getCrypto,
  addCrypto,
  seedCryptoData
} = require('../controllers/cryptoController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', getCryptos);
router.get('/gainers', getTopGainers);
router.get('/new', getNewListings);
router.get('/:id', getCrypto);
router.post('/', protect, addCrypto);
router.post('/seed', seedCryptoData);

module.exports = router;