const seedClient = require('./client-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedClient();
    console.log('\n----- CLIENT SEEDED -----\n');
};

seedAll();