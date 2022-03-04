const router = require('express').Router();
const { render } = require('express/lib/response');
const { User, Message, Conversation } = require('../../models');

//homepage
router.get('/', async (req, res) => {
    try {
        res.render('homepage', {
            userId: req.session.userId,
        });
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;