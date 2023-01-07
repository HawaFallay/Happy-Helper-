const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');


router.use('/', homeRoutes);
router.use('/api', apiRoutes);

// router.use((req, res) => {
//     res.render('landingpage')
// });


module.exports = router;