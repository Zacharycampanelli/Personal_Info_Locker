const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const passwordRoutes = require('./password-routes');

router.use('/user', userRoutes);
router.use('/password', passwordRoutes);


module.exports = router;