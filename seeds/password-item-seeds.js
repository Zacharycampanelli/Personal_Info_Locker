const { Password } = require('../models');

const passwordData = [
    {
        email: 'zac2@mail.com',
        username: 'zackattack',
        password: 'notapassword',
        website_url: 'www.google.com',
        user_id: 1
    }, ];

const seedPasswords = () => Password.bulkCreate(passwordData);

module.exports = seedPasswords;
