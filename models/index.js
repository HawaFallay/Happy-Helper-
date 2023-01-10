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

Helper.hasMany(Task, {
    foreignKey: 'helper_id',
    onDelete: 'CASCADE'
});

Task.belongsTo(Helper, {
    foreignKey: 'helper_id'
})



module.exports = { Client, Helper, Task };