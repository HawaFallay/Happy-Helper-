const router = require('express').Router();
const { Client, Task, TaskStatus } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const statusData = await TaskStatus.findAll({include: [{ model: Client }, { model: Task }] });
        res.status(200).json(statusData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;