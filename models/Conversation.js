const { Model, DataTypes, NOW } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class Conversation extends Model { }
// should we include user_id here as well to grab Conversations by User? 
Conversation.init(
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
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        modelName: 'conversation'
    }
);

module.exports = Conversation;