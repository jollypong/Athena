const { Model, DataTypes, NOW } = require('sequelize');
const sequelize = require('../config/connection');

class Conversation extends Model {} 

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
            references: {
                model: 'user', 
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        modelName: 'conversation'
    }
);

module.exports = Conversation;