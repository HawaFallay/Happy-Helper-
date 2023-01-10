const { Client } = require('../models');
const bcrypt = require('bcrypt');
const tempPassword = bcrypt.hashSync("temporary", 10);


const clientData = [
    // {
    //     first_name: 'James',
    //     last_name: 'Gosling',
    //     username: 'JGoose',
    //     email: 'JGosling@test.com',
    //     password: tempPassword,
    //     role_title: "Client",
    //     location: '15 Blossom Court, Daly City, CA, 94014',
    // },
    // {
    //     first_name: 'Tim',
    //     last_name: 'Berners-Lee',
    //     username: 'T-Burn',
    //     email: 'TimBL@test.com',
    //     password: tempPassword,
    //     role_title: "Client",
    //     location: '11 Wyandotte Avenue, Daly City, CA, 94014'
    // },
    // {
    //     first_name: 'Grace',
    //     last_name: 'Hopper',
    //     username: 'GHoops',
    //     email: 'GHopper@test.com',
    //     password: tempPassword,
    //     role_title: "Client",
    //     location: '125 Price Street, Daly City, CA, 94014'
    // },
    // {
    //     first_name: 'Alan',
    //     last_name: 'Turing',
    //     username: 'A-Turns',
    //     email: 'ATuring@test.com',
    //     password: tempPassword,
    //     role_title: "Client",
    //     location: '317 Florence Street, Daly City, CA, 94014'
    // },
    // {
    //     first_name: 'Joan',
    //     last_name: 'Clarke',
    //     username: 'Joan of Clark',
    //     email: 'JClarke@test.com',
    //     password: tempPassword,
    //     role_title: "Client",
    //     location: '34 E Moltke Street, Daly City, CA, 94014'
    // },
    // {
    //     first_name: 'Charles',
    //     last_name: 'Babbage',
    //     username: 'Cabbage',
    //     email: 'CBabbage@test.com',
    //     password: tempPassword,
    //     role_title: "Client",
    //     location: '511 Garfield Avenue, San Francisco, CA, 94112'
    // },
    // {
    //     first_name: 'Katherine',
    //     last_name: 'Johnson',
    //     username: 'KJ',
    //     email: 'KJohnson@test.com',
    //     password: tempPassword,
    //     role_title: "Client",
    //     location: '217 Plymouth Avenue, San Francisco, CA, 94112'
    // },
];

const seedClients = () => Client.bulkCreate(clientData);

module.exports = seedClients;