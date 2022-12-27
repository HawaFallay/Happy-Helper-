// const { Model, Datatypes } = require('sequelize');

// const sequelize = require('../config/connection');

// const Helper = require('./helper');

// class Helpers extends Model {}

// Helpers.init(
//     {
//         id: {
//             type: Datatypes.INTEGER,
//             allowNull: false,
//             primaryKey: true,
//             autoIncrement: true
//         },
//         first_name: {
//             type: Datatypes.STRING,
//             allowNull: false
//         },
//         last_name: {
//             type: Datatypes.STRING,
//             allowNull: false
//         },
//         role_id: {
//             type: Datatypes.INTEGER,
//             references: {
//                 model: 'role',
//                 key: 'id'
//             }
//         },
//         location: {
//             type: Datatypes.TEXT,
//             allowNull: false
//         },
//     },
//     {
//         sequelize,
//         timestamps: false,
//         freezeTableName: true,
//         underscored: true,
//         modelName: 'helpers'
//     }
// );

// module.exports = Helpers;