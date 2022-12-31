const router = require('express').Router();
const { Client, Task } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const clientData = await Client.findAll({ include: Task });
        res.status(200).json(clientData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const clientData = await Client.findByPk(req.params.id, { include: Task });
        if (!clientData) {
            res.status(400).json({message: "Unable to find a client with this id"});
            return
        }
        res.status(200).json(clientData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.put('/:id', async (req, res) => {
    try {
        const clientData = await Client.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(clientData);
    } catch (err) {
        res.status(400).json(err);
    }
});
module.exports = router;