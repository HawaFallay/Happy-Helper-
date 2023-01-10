const { Router } = require("express");

const Helper = require('../../models/helper');
const Task = require('../../models/tasks');

const helperRouter = new Router();

helperRouter.get('/', async (req, res) => {
    try {
        const helperData = await Helper.findAll({ Task });
        res.status(200).json(helperData);
    } catch (err) {
        res.status(500).json(err);
    }
});



module.exports = helperRouter;