// const router = require('express').Router();
// const { application, Router } = require('express');
// const { Client, Helper, Tasks } = require('../models');

const { Router } = require('express');
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth');
const Helper = require('../models/helper');


const router = new Router();

router.get('/', (req, res) => {
    res.render('landingpage');
});

router.get('/helpers', auth, async (req, res) => {
    const { logintoken } = req.cookies;

try {
    const data = jwt.verify(logintoken, process.env.JWT_KEY);
    const { id } = data;

    const helper = await Helper.findByPk(id);
    const plainHelper = helper.get({ plain: true });
    console.log(plainHelper);

    res.render('helpers', {
        helper: plainHelper,
    });
    
} catch (error) {
    if (error.message === "invalid token" || error.message === "jwt must be provided") {
        res.redirect('/landingpage');
    } else {
        res.status(500).end("an error occurred");
    }
}

    
});

// router.get('/', async (req, res) => {
//     res.render('landingpage');
// });

// router.get('/registerpage', async (req, res) => {
//     res.render('registerpage');
// });

router.get('/clientpage', auth, async (req, res) => {
    res.render('clientpage');
});

router.get('/confirmation', auth, async (req, res) => {
    res.render('confirmation');
});

module.exports = router;