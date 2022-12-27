const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const landingPageRoutes = require('./landingPageRoutes')
const registerRoutes = require('./registerRoutes')
const tasksRoutes = require('./tasksRoutes')

router.use('/', homeRoutes);
router.use('/registerpage', registerRoutes);
router.use('/landingpage', landingPageRoutes);

router.use((req, res) => {
    res.send("<h1>Wrong Route!</h1>")
});

router.use('/landingpage',landingPageRoutes)
router.use('/registerpage',registerRoutes)
router.use('/clientpage',tasksRoutes)
module.exports = router;