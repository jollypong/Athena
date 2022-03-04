const router = require('express').Router();
const { render } = require('express/lib/response');
const { User, Message, Conversation } = require('../../models');

//
router.get('/:id', async (req, res) => {
    try {
        const messageArray = await Message.findAll({
            where: {
                conversation_id: req.params.id
            }
        });
        const messagesObject = messageArray.map(message => message.dataValues);
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