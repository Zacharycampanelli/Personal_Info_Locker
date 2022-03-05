const seedUsers = require('./user-seeds');
const seedPasswords = require('./password-item-seeds')
const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE HAS BEEN SYNCED -----\n');
  await seedUsers();
  console.log('\n----- USERS HAVE BEEN SEEDED -----\n');
  await seedPasswords();
  console.log('\n----- PASSWORDS HAVE BEEN SEEDED -----\n');

  process.exit(0);
};

seedAll();
