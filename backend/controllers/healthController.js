// Health check controller

const getHealth = (req, res) => {
  res.status(200).json({
    success: true,
    message: 'DhroneCrypto API is running',
    service: 'DhroneCrypto Backend',
    environment: process.env.NODE_ENV || 'development'
  });
};

module.exports = { getHealth };