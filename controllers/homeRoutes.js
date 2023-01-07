// const router = require('express').Router();
// const { application, Router } = require('express');
// const { Client, Helper, Tasks } = require('../models');

const { Router } = require('express');
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth');
const pullData = require('../middleware/pullData');
const {Helper, Task, Client} = require('../models');
const { use } = require('./api/landingPageRoutes');


const router = new Router();

router.get('/', (req, res) => {
    res.render('landingpage', {
        style: 'landingpage.css'
    });
});

router.get('/helpers', auth, async (req, res) => {
    //res.render('helpers');
    console.log('THIS IS THE HELPERS PAGE');
try {
    const helper = await Helper.findOne({ where: { username: req.username } });
    const plainHelper = helper.get({ plain: true });
    console.log(helper);
    console.log(plainHelper);

    res.render('helpers', {
        helper: plainHelper,
        style: 'helpers.css'
    });
    
} catch (error) {

    if (error.message === "invalid token" || error.message === "jwt must be provided") {
        res.redirect('/landingpage');
    } else {
        res.status(500).end("an error occurred");
    }
}

});

router.get('/', async (req, res) => {
    res.render('landingpage');
});

router.get('/registerpage', async (req, res) => {
    res.render('registerpage', {
        style: 'registerpage.css'
    }
    )
});

router.get('/clientpage', auth, async (req, res) => {
    console.log("This is the get route: " + req.username);
    console.log("This is the get route: " + req.userHelperData);
    console.log("This is the get route: " + req.userClientData.id);
    const userTasks = await Task.findAll({where: {client_id: req.userClientData.id}})
    //console.log(userTasks);

    res.render('clientpage', {
        style: 'client.css'
    });
});

router.get('/confirmation', auth, async (req, res) => {
    res.render('confirmation', {
        style: 'confirmation.css'
    });
});

module.exports = router;