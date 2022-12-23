const { Model, DataTypes } = require('sequelize');
//const { toDefaultValue } = require('sequelize/types/utils');

const sequelize = require('../config/connection');


class Tasks extends Model {}

Tasks.init(
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    task: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey:true
    },
    task_details: {
        type: DataTypes.TEXT
    },
    task_time: {
        type: DataTypes.DATE
    },
        // wondering how to set the default time to the current time stamp
    status_id: {
        type: DataTypes.INTEGER
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'tasks'
    }
);



module.exports = Tasks;