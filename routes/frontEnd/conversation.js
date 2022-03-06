const router = require('express').Router();
const { render } = require('express/lib/response');
const { User, Message, Conversation } = require('../../models');

//
router.get('/:id', async (req, res) => {
    try {
        const messageArray = await Message.findAll({
            where: {
                conversation_id: req.params.id
            },
            include: [
                {model: User}
            ]
        });
        // console.log(messageArray);

        const messagesObject = messageArray.map(message => {
            return {
                id: message.id,
                body: message.body,
                user_id: message.user_id,
                conversation_id: message.conversation_id,
                isMessageOwner: message.user_id === req.session.userId,
                username: message.user.username
            }
        });
        // console.log(messagesObject)

        res.render('conversation', {
            messages: messagesObject,
            userId: req.session.userId,
            conversationId: req.params.id
        })
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;