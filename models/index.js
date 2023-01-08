const Client = require('./client');
const Helper = require('./helper');
const Task = require('./tasks');
//const TaskStatus = require('./taskStatus');

Task.belongsTo(Client, {
    foreignKey: 'client_id'
});

Client.hasMany(Task, {
    foreignKey: 'client_id',
    onDelete: 'CASCADE'
});

// TaskStatus.hasMany(Task, {
//     foreignKey: 'status_id',
//     onDelete: 'CASCADE'
// });

// Task.belongsTo(TaskStatus, {
//     foreignKey: 'status_id'
// });

Helper.hasMany(Task, {
    foreignKey: 'helper_id',
    onDelete: 'CASCADE'
});

Task.belongsTo(Helper, {
    foreignKey: 'helper_id'
})


//module.exports = { Client, Helper, Task, TaskStatus };
module.exports = { Client, Helper, Task };