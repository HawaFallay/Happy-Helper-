const { Helper } = require('../models');
const bcrypt = require('bcrypt');
const tempPassword = bcrypt.hashSync("temporary", 10);

const helperData = [
    {
        first_name: 'Ada',
        last_name: 'Lovelace',
        username: 'laced_with_love',
        email: 'ALovelace@test.com',
        password: tempPassword,
        role_title: "Helper",
        location: '1440 Mission Street, Daly City, CA, 94014'
    },
    {
        first_name: 'Annie',
        last_name: 'Easley',
        username: 'GG-EZLY',
        email: 'AEasley@test.com',
        password: tempPassword,
        role_title: "Helper",
        location: '112 Ashton Avenue, San Francisco, CA, 94112'
    },
    
];

const seedHelpers = () => Helper.bulkCreate(helperData);

module.exports = seedHelpers;