const User = require('./User');
const Password = require('./Password');

User.hasMany(Password, {
    foreignKey: 'user_id'
});

Password.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});




Post.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

Post.hasMany(Comment, {
    foreignKey: 'postId',
    onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

module.exports = {
    User,
    Password
};