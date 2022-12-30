const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class TaskStatus extends Model {}

TaskStatus.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        task_status: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'tasks'
    }
);

module.exports = TaskStatus;