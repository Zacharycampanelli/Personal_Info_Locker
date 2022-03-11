const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes');
// const commentRoutes = require('./comment-routes');
// const passwordRoutes = require('./password-routes');

router.use('/user', userRoutes);
router.use('/post', postRoutes);
// router.use('/comment', commentRoutes);
// router.use('/password', passwordRoutes);


module.exports = router;