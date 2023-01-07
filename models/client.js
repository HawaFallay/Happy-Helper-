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
        username: {
            type: DataTypes.STRING,
            // prevents null values
            allowNull: false,
            // will only allow alphanumeric characters
            unique: true,
            validate: {
            isAlphanumeric: true,
            },
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            // validate: {
            // isEmail: true,
            // },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            // must be longer than 8 characters
            validate: {
            len: [8],
            },
        },
        role_title: {
            type: DataTypes.STRING,
            allowNull: false
        },
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