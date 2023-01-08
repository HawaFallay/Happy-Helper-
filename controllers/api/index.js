const router = require('express').Router();

const clientRoutes = require('./clientRoutes');
const helperRoutes = require('./helperRoutes');
const taskRoutes = require('./tasksRoutes');
//const taskStatusRoutes = require('./taskStatusRoutes');

const landingPageRoutes = require('./landingPageRoutes');
const registerRoutes = require('./registerRoutes');

router.use('/clients', clientRoutes);
router.use('/helpers', helperRoutes);
router.use('/task', taskRoutes);
//router.use('/taskStatus', taskStatusRoutes);

router.use('/registerpage', registerRoutes);
router.use('/landingpage', landingPageRoutes);

module.exports = router;