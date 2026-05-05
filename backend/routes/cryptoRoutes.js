const express = require('express');
const {
  getCryptos,
  getTopGainers,
  getNewListings,
  getCrypto,
  addCrypto
} = require('../controllers/cryptoController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', getCryptos);
router.get('/gainers', getTopGainers);
router.get('/new', getNewListings);
router.get('/:id', getCrypto);
router.post('/', protect, addCrypto);

module.exports = router;