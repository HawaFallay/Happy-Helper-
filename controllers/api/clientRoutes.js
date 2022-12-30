const router = require('express').Router();
const { Client, Task } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const clientData = await Client.findAll({include: Task});
        res.status(200).json(clientData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;