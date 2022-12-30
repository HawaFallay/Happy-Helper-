const { Model, DataTypes } = require('sequelize');
//const { toDefaultValue } = require('sequelize/types/utils');

const sequelize = require('../config/connection');

class Task extends Model {}

Task.init(
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
            //just using a string for now to put in values manually. Woul be nice to find a way to have a drop down menu for date and time in the front end.
            // wondering how to set the default time to the current time stamp
            type: DataTypes.STRING,
            allowNull: false
        },
            //Will probably make another table for this, so we can view tasks by status.  
        task_status_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'taskStatus',
                key: 'id'
            }
        },
        //This allows us to get client associated with the task
        client_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'client',
                key: 'id'
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



module.exports = Task;