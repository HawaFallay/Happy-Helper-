const sequelize = require('../config/connection');
const seedClients = require('./client-seeds');
const seedRoles = require('./role-seeds');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedClients();
    console.log('\n----- CLIENT SEEDED -----\n');
    await seedRoles();
    console.log('\n----- ROLE SEEDED -----\n');

    process.exit(0);
};

seedAll();