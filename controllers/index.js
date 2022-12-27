const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
// const landingPageRoutes = require('./landingPageRoutes');
// const registerRoutes = require('./registerRoutes');
//const tasksRoutes = require('./tasksRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

router.use((req, res) => {
    res.send("<h1>Wrong Route!</h1>")
});

// router.use('/landingpage',landingPageRoutes)
// router.use('/registerpage',registerRoutes)
// router.use('/clientpage',tasksRoutes)
module.exports = router;