const router = require('express').Router();
const clientRoutes = require('./clientRoutes');

const landingPageRoutes = require('./landingPageRoutes');
const registerRoutes = require('./registerRoutes');
const tasksRoutes = require('./tasksRoutes');

router.use('/clients', clientRoutes);

//router.use('/registerpage', registerRoutes);
//router.use('/landingpage', landingPageRoutes);

module.exports = router;