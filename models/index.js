const User = require('./User');
const Conversation = require('./Conversation');
const Message = require('./Message');

//user has many conversations
User.hasMany(Conversation, {
    foreignKey: 'user_id'
});

Conversation.belongsTo(User, {
    foreignKey: 'user_id'
});

//Conversations has many Messages
Conversation.hasMany(Message, {
    foreignKey: 'Conversation_id'
});

Message.belongsTo(Conversation, {
    foreignKey: 'Conversation_id'
});

//user has many Messages
User.hasMany(Message, {
    foreignKey: 'user_id'
});

Message.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = {
    User,
    Conversation,
    Message
};