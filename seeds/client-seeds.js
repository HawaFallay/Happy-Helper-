const { Client } = require('../models');

const clientData = [
    {
        first_name: 'James',
        last_name: 'Gosling',
        username: 'JGoose',
        email: 'JGosling@test.com',
        //passwoard: 'temporary',
        //role_id: 1,
        location: '15 Blossom Court, Daly City, CA, 94014'
    },
    {
        first_name: 'Tim',
        last_name: 'Berners-Lee',
        username: 'T-Burn',
        email: 'TimBL@test.com',
        //passwoard: 'temporary',
        //role_id: 1,
        location: '11 Wyandotte Avenue, Daly City, CA, 94014'
    },
    {
        first_name: 'Grace',
        last_name: 'Hopper',
        username: 'GHoops',
        email: 'GHopper@test.com',
        //passwoard: 'temporary',
        //role_id: 1,
        location: '125 Price Street, Daly City, CA, 94014'
    },
    {
        first_name: 'Alan',
        last_name: 'Turing',
        username: 'A-Turns',
        email: 'ATuring@test.com',
        //passwoard: 'temporary',
        //role_id: 1,
        location: '317 Florence Street, Daly City, CA, 94014'
    },
];

const seedClients = () => Client.bulkCreate(clientData);

module.exports = seedClients;