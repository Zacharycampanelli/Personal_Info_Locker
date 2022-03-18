const User = require('./User');
const Post = require('./Post');
const Credit = require('./Credit');
// const Comment = require('./Comment');
// const Password = require('./Password');

User.hasMany(Post, {
    foreignKey: 'user_id'
});

User.hasMany(Credit, {
    foreignKey: 'user_id'
});

// Password.belongsTo(User, {
//     foreignKey: 'user_id',
//     onDelete: 'CASCADE'
// });




Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Credit.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

// Post.hasMany(Comment, {
//     foreignKey: 'postId',
//     onDelete: 'CASCADE'
// });

// Comment.belongsTo(User, {
//     foreignKey: 'userId',
//     onDelete: 'CASCADE'
// });

module.exports = {
    User,
    Post,
    Credit
    // Comment,
    // Password
};