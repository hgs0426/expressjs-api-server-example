const router = require('express').Router();

const { login, create, show, update, destory } = require('./controllers');

router.post('/api/users/login', login);
router.post('/api/users', create);
router.get('/api/users', show);
router.put('/api/users', update);
router.delete('/api/users', destory);

module.exports = router;