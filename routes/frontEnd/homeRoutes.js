const router = require('express').Router();
const { render } = require('express/lib/response');
const { User, Message, Conversation } = require('../../models');

//homepage
router.get('/', async (req, res) => {
    try {
        const conversationArray = await Conversation.findAll();
        const conversationObject = conversationArray.map(conversation => conversation.get({ plain: true }));
        console.log(conversationObject);

        res.render('homepage', {
            userId: req.session.userId,
            conversations: conversationObject
        });
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;