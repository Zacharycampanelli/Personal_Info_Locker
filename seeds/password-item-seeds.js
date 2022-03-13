const { Post } = require('../models');

const passwordData = [
    {
        title: 'Ex.1',
        email: 'zac2@mail.com',
        username: 'zackattack',
        password: 'notapassword',
        website_url: 'www.google.com',
        user_id: 1
    }, 
    {
        title: 'Ex.1',
        email: 'zac2@mail.com',
        username: 'zackattack',
        password: 'notapassword',
        website_url: 'www.google.com',
        user_id: 1
    }, 
];

const seedPasswords = () => Post.bulkCreate(passwordData);

module.exports = seedPasswords;
