const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const landingPageRoutes = require('./landingPageRoutes')
const registerRoutes = require('./registerRoutes')

router.use('/', homeRoutes);
router.use('/landingpage',landingPageRoutes)
router.use('/registerpage',registerRoutes)
module.exports = router;