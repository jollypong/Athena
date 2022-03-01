const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class Messages extends Model { }

Messages.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        body: {
            type: DataTypes.STRING, 
            allowNull: false
        }
    }
)

module.exports = Messages; 