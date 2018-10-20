const router = require('express').Router();

const users = require('./api/users/routers.js');
const devices = require('./api/devices/routers.js');

const routers = [users, devices];

router.use('/', routers);

module.exports = router;