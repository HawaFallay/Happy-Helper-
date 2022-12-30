const Client = require('./client');
const Helper = require('./helper');
const Task = require('./tasks');

Task.belongsTo(Client, {
    foreignKey: 'client_id'
});

Client.hasMany(Task, {
    foreignKey: 'client_id',
    onDelete: 'CASCADE'
});

module.exports = { Client, Helper, Task };