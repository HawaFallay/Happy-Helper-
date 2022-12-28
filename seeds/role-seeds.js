const { Role } = require('../models');

const roleData = [
    {
        role_title: 'Client',
    },
    {
        role_title: 'Helper',
    },
    {
        role_title: 'Client',
    },
    {
        role_title: 'Helper',
    },
];

const seedRoles = () => Role.bulkCreate(roleData);

module.exports = seedRoles;