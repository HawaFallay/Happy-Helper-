const router = require('express').Router();
const { application } = require('express');
const { Client, Helper, Tasks } = require('../models');
const auth = require('../middleware/auth');


router.get('/', async (req, res) => {
    res.render('landingpage');
});

// router.get('/registerpage', async (req, res) => {
//     res.render('registerpage');
// });

router.get('/clientpage', auth, async (req, res) => {
    res.render('clientpage');
});

router.get('/helperspage', auth, async (req, res) => {
    res.render('helpers');
});

router.get('/confirmation', auth, async (req, res) => {
    res.render('confirmation');
});

module.exports = router;