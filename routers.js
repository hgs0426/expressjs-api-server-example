const router = require('express').Router();
const bodyParser = require('body-parser');

/* define router middleware, this below */
/* router middleware, request json in body */
router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

/* require routers to be routed */
const users = require('./api/users/routers.js');
const devices = require('./api/devices/routers.js');

const routers = [users, devices];

router.use('/', routers);

module.exports = router;