const router = require('express').Router();
const Message = require('../../models/Message');



// router.get('/:id', async (req, res) => {
//     try{
//         const getMessage = await Message.findByPk(req.params.id, {
//             include: [
//                 Message
//             ]
//         });
//         res.status(200).json(getMessage); 
//     }catch (err){
//         res.status(500).json(err); 
//     };
// });

router.get('/:id', async (req, res) => {
    try {
        const messageDbData = await Message.findByPk(req.params.id, {
            attributes: ['id', 'body']
        });
        const messageData = messageDbData({ plain: true });
        console.log(messageData);
        res.render('message', {
            messageData,
            logged_in: req.session.userId
        });
    } catch (err) {
        res.status(500).json(err)
    };
});

//get all messages 
router.get('/', async (req, res) => {
    try {
        const getAllMessages = await Message.findAll({
            include: [
                Message
            ]
        });
        res.status(200).json(getAllMessages);
    } catch (err) {
        res.status(500).json(err)
    };
});


router.post('/', async (req, res) => {
    try {
        const newMessage = await Message.create({
            user_id: req.session.userId,
            conversation_id: req.body.conversation_id,
            body: req.body.body
        });
        res.status(200).json(newMessage)
    } catch (err) {
        res.status(500).json(err)
        console.log(err);
        console.log('====================');
        console.log(newMessage)
    };
});

router.delete('/:id', async (req, res) => {
    try {
        const messageData = await Message.delete({
            where: {
                id: req.params.id,
                user_id: req.session.userId,
            },
        });
        res.status(200).json(messageData);
    } catch (err) {
        res.status(500).json(err);
    };
});

module.exports = router;