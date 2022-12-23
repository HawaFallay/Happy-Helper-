const express = require('express');
const router = express.Router();
const sequelize = require('./config/connection');
const Tasks = require('../models/tasks');

router.get('/', async (req, res)=>
    Tasks.findAll()
    .then(tasks => {
        console.log(tasks)
        res.sendStatus(200);
    })
    .catch(err => console.log(err))
);
module.exports = router;
