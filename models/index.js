const User = require('./User');
const Conversation = require('./Conversation');
const Message = require('./Message');

//Conversations has many Messages
Conversation.hasMany(Message, {
    foreignKey: 'conversation_id',
    onDelete: 'CASCADE'
});

Message.belongsTo(Conversation, {
    foreignKey: 'conversation_id'
});

//user has many Messages
User.hasMany(Message, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Message.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = {
    User,
    Conversation,
    Message
};