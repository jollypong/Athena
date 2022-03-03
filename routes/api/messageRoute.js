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

//WHY isn't the Message require being recognized here? and also the request? 
router.get('/:id', async (req, res) => {
    try {
        const messageDbData = await Message.findByPk(req.params.id, {
            attributes: ['id', 'title']
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

router.post('/', async (req, res) => {
    try {
        const user_id = req.session.userId;;
        const { conversation_id, body } = req.body;

        if (!user_id || !conversation_id || !body) {
            res.json({ message: "Missing parameters" })
        }
        const newMessage = await Message.create({
            user_id,
            conversation_id,
            body,
        });
        res.status(200).json(newMessage)
    } catch (err) {
        res.status(500).json(err)
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