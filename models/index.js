const User = require('./User');

// const Comment = require('./Comment');
const Password = require('./Password');

User.hasMany(Password, {
    foreignKey: 'user_id'
});

Password.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});






module.exports = {
    User,
  
    Password
};