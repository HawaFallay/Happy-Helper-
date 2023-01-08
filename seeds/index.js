const sequelize = require('../config/connection');
const seedClients = require('./client-seeds');
const seedHelpers = require('./helpers-seeds');
const seedTasks = require('./task-seeds');
const seedTaskStatus = require('./status-seeds');


const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedClients();
    console.log('\n----- CLIENT SEEDED -----\n');
    await seedHelpers();
    console.log('\n----- HELPER SEEDED -----\n');
    // await seedTaskStatus();
    // console.log('\n----- TaskStatus SEEDED -----\n');
    await seedTasks();
    console.log('\n----- Task SEEDED -----\n');
    
    

    process.exit(0);
};

seedAll();