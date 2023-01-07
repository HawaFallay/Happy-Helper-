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
        status: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'taskStatus'
    }
);

module.exports = TaskStatus;