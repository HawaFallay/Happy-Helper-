const router = require('express').Router();
const { Client } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const clientData = await Client.findAll({include: Client});
        res.status(200).json(clientData);
    } catch (err) {
        res.status(500).json(err);
    }
});