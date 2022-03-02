const router = require('express').Router();
const { json } = require('express/lib/response');
const Conversation = require('../../models/Conversations');
const Conversation = require('../../models/Conversations');
const { post } = require('./userRoutes');

//get all conversations
router.get('/', async (req, res) => {
    try {
        const getAllConversation = await conversation.findAll({
            include: [
                Conversation,
                Messages,
            ]
        });
        res.status(200).json(getallConversation);
    } catch (err) {
        res.status(500).json(err)
    };
});

//get one conversation
router.get('/:id', async (req, res) => {
    try{
        const getConveration = await Conversation.findByPk(req.params.id, {
            include: [
                Conversation
            ]
        });
        res.status(200).json(getConveration); 
    }catch (err){
        res.status(500).json(err); 
    };
});

//create new conversation
router.post('/', async (req, res) => {
    try{
        const newConversation = await Conversation.create({
            ...req.body,
            user_id: req.session.user_id, //TRAVIS HELP!
        }); 
        res.status(200).json(newConversation);
    }
    })
})