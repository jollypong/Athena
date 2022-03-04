const router = require('express').Router();
const { json } = require('express/lib/response');
const Conversation = require('../../models/Conversation');
const Message = require('../../models/Message');
const withAuth = require('../../utils/auth');

//get all conversations
router.get('/', async (req, res) => {
    try {
        const getAllConversation = await Conversation.findAll();
        res.status(200).json(getAllConversation);
    } catch (err) {
        res.status(500).json(err)
    };
});

//get one conversation
router.get('/:id', async (req, res) => {
    try {
        const getConversation = await Conversation.findByPk(req.params.id, {
            include: [
                Conversation
            ]
        });
        res.status(200).json(getConversation);
    } catch (err) {
        res.status(500).json(err);
    };
});

// router.get('/:id', async (req, res)=> {
//     try {
//         const conversationDbData = await Post.findByPk(req.params.id, {
//             attributes: ['id', 'title']
//         }); 
//         const conversationData = conversationDbData({ plain: true}); 
//         console.log(conversationData); 
//         res.render('Conversation', {
//             conversationData, 
//             logged_in: req.session.userId
//         });
//     } catch (err) {
//         res.status(500).json(err)
//     };
// });

//create new conversation
router.post('/', async (req, res) => {
    try {
        const newConversation = await Conversation.create({
            title: req.body.title,
        });
        res.status(200).json(newConversation);
    } catch (err) {
        res.status(400).json(err);
    };
});

//delete conversation
router.delete('/:id', withAuth, async (req, res) => {
    try {
        const conversationData = await Conversation.delete({
            where: {
                id: req.params.id,
                user_id: req.session.userId,
            },
        });
        if (!conversationData) {
            res.status(404).json({ message: 'No conversation found with this ID!' });
            return;
        } res.status(200).json(conversationData);
    } catch (err) {
        res.status(500).json(err);
    };
});

module.exports = router;