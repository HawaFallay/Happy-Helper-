const router = require('express').Router();
const { Task, TaskStatus, Client } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const statusData = await TaskStatus.findAll({ include: Task });
        res.status(200).json(statusData);
    } catch (err) {
        res.status(500).json(err);
    }
});

//Can get task by status. Would be nice to get task by status with the associated client
router.get('/:id', async (req, res) => {
    try {
        const statusData = await TaskStatus.findByPk(req.params.id, {include: Task });
        if (!statusData) {
            res.status(404).json({message: "No task status found with this id!"});
        }

        res.status(200).json(statusData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;