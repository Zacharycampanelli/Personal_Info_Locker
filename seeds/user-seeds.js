const { User } = require('../models');

const userData = [
  {
    username: "Zack",
    email: "zack@mail.com",
    password: "password"
  },
  {
    username: "Irvens",
    email: "irvens@mail.com",
    password: "password"
  },
  {
    username: "Marika",
    email: "marika@mail.com",
    password: "password"
  },
  {
    username: "Danielle",
    email: "danielle@mail.com",
    password: "password"
  },
  {
    username: "Nathan",
    email: "nathan@mail.com",
    password: "password"
  },
  {
      username: "Michael",
      email: "michael@mail.com",
      password: "password"
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
