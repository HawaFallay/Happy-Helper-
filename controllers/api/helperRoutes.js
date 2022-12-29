const router = require('express').Router();
const { Client } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const helperData = await Client.findAll();
        res.status(200).json(clientData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;