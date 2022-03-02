const router = require('express').Router();

const homeRoutes = require('./homeRoutes');
const loginRoutes = require('./loginRoutes');
const conversation = require('./conversation');

router.use('/', homeRoutes);
router.use('/login', loginRoutes);
router.use('/conversation', conversation);

module.exports = router;
