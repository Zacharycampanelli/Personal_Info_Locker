const { Post } = require('../models');

const passwordData = [
    {
        title: 'Website Title',
        email: 'zac2@mail.com',
        username: 'zackattack',
        password: 'notapassword',
        website_url: 'www.google.com',
        user_id: 1
    }, ];

const seedPosts = () => Post.bulkCreate(passwordData);

module.exports = seedPosts;
