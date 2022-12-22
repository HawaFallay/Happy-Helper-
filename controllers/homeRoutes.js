const router = require('express').Router();
const { Client, Helper, Tasks } = require('../models');

router.get('/', async (req, res) => {
    res.render('landingpage');
});

router.get('/registerpage', async (req, res) => {
    res.render('registerpage');
});

router.get('/clientpage', async (req, res) => {
    res.render('clientpage');
});

router.get('/voluteerpage', async (req, res) => {
    res.render('volunteerpage');
});

router.get('/confirmation', async (req, res) => {
    res.render('confirmation');
});

module.exports = router;