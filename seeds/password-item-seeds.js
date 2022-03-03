const { Password } = require('../models');

const passwordData = [{}, {}, {}, {}, {}];

const seedPasswords = () => User.bulkCreate(passwordData);

module.exports = seedPasswords;
