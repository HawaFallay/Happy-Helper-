const { Model, Datatypes, DataTypes } = require('sequelize');
const { toDefaultValue } = require('sequelize/types/utils');

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
        task_details: DataTypes.TEXT,
        task_time: DataTypes.DATE,
        // wondering how to set the default time to the current time stamp
        defaultValue.NOW,
,

    }
)