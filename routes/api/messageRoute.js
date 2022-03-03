const router = require('express').Router();
const Message = require('../../models/Message');

module.exports = router;

router.post('/', async (req,res)=> {
    try {
        const user_id = req.session.user_id; 
        const {conversation_id, body} = req.body; 

        if (!user_id || !conversation_id || !body){
            res.json({message: "Missing parameters"})
        }
        const newMessage = await Message.create({
            user_id, 
            conversation_id, 
            body, 
        });
        res.status(200).json(newMessage)
    } catch (err){
        res.status(500).json(err)
    };
});

router.delete('/:id', async (req, res)=> {
    try{
        const messageData = await Message.delete({
            where: {
                id: req.params.id, 
                user_id: req.session.user_id, 
            },
        }); 
        res.status(200).json(messageData);
    }catch(err) {
        res.status(500).json(err);
    };
});

module.exports = router;