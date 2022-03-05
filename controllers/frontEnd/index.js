const router = require('express').Router();

const homeRoutes = require('./homeRoutes');
const loginRoutes = require('./loginRoutes');
const conversation = require('./conversation');
const signup= require('./signupRoute');

router.use('/', homeRoutes);
router.use('/login', loginRoutes);
router.use('/conversation', conversation);
router.use('/signup',signup);
module.exports = router;
