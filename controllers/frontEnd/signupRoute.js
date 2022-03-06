const router = require('express').Router();
const { render } = require('express/lib/response');

//signup
router.get('/', (req, res) => {
    res.render('signup');
});

module.exports = router;