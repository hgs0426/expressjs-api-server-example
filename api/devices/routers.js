const router = require('express').Router();
const { hello } = require('./controllers');

router.get('/api/devices', hello);

module.exports = router;