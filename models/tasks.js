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
            type: DataTypes.STRING,
            allowNull: false
       },
            //Changing this to a string. Getting rid of taskStatus table.  
        // status_id: {
        //     type: DataTypes.INTEGER,
        //     defaultValue: 1,
        //     references: {
        //         model: 'taskStatus',
        //         key: 'id'
        //     }
        // },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "Open", 
        },
        //This allows us to get client associated with the task
        client_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'client',
                key: 'id'
            }
        },
        helper_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'helper',
                key: 'id'
            }
        },
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