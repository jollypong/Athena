const { Model, DataTypes, NOW } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class Conversations extends Model {} 
// should we include user_id here as well to grab Conversations by User? 
Conversations. init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        }, 
        title: {
            type: DataTypes.STRING, 
            allowNull: false, 
            defaultValue: null
        },
        date: {
            type: DataTypes.DATE, 
            allowNull: false, 
            defaultValue: NOW
        }, 
        time: {
            type: DataTypes.TIME, 
            allowNull: false, 
            defaultValue: NOW,
        },
    }
)

module.exports = Conversations;