const router = require('express').Router();
const { render } = require('express/lib/response');
const { User, Post, Comment } = require('../../models');

//conversation
router.get('/', async (req, res) => {
    try {
        res.render('conversation', {
            userId: req.session.userId,
        });
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;