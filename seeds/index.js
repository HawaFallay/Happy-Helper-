const sequelize = require('../config/connection');
const seedClients = require('./client-seeds');


const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedClients();
    console.log('\n----- CLIENT SEEDED -----\n');
    

    process.exit(0);
};

seedAll();