const { Model, DataTypes } = require('sequelize');
//const { toDefaultValue } = require('sequelize/types/utils');

const sequelize = require('../config/connection');


class Tasks extends Model {}

Tasks.init(
    {
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
        type: DataTypes.TEXT,
        allowNull: false
    },
    task_time: {
        type: DataTypes.DATE,
        allowNull: false
    },
        // wondering how to set the default time to the current time stamp
    task_status: {
        type: DataTypes.STRING,
        allowNull: false
    },
    client_id: {
        type: DataTypes.INTEGER,
        reference: {
            model: 'client',
            key: 'id',
            unique: false
        }
    },
    helper_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'helper',
            key: 'id',
            unique: false
        }
    }
    },
    {
        //link to database connection
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'tasks'
    }
);



module.exports = Tasks;