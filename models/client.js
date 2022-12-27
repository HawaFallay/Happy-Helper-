const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

const Helpers = require('./helper');

class Client extends Model {}

Client.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // role_id: {
        //     type: DataTypes.INTEGER,
        //     references: {
        //         model: 'role',
        //         key: 'id'
        //     }
        // },
        location: {
            type: DataTypes.TEXT,
            allowNull: false
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'client'
    }
);

module.exports = Client;