const User = require('./Users');
const Conversation = require('./Conversations');
const Message = require('./Messages');

//user has many posts
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

module.exports = {
    User
};
