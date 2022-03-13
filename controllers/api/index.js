const router = require('express').Router();

const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');
const creditRoutes = require('./credit-routes')

router.use('/user', userRoutes);
router.use('/post', postRoutes);

module.exports = router;