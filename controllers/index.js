const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');


router.use('/', homeRoutes);
router.use('/api', apiRoutes);

router.get('*', async (req, res) => {
    res.redirect('/');
});

module.exports = router;