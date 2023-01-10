
const router = require('express').Router();
//const { Task, Client, TaskStatus, Helper } = require('../../models');
const { Task, Client, Helper } = require('../../models');
const pullData = require('../../middleware/pullData')

router.get('/', async (req, res) => {
  try {
    const taskData = await Task.findAll({ include: [{ model: Client}, { model: Helper}] });
    res.status(200).json(taskData);
  } catch (err) {
      res.status(500).json(err);
  }
});  

router.get('/:id', async (req, res) => {
    try {
        const taskData = await Task.findByPk(req.params.id, { include: Client });
        if (!taskData) {
            res.status(404).json({ message: "No task found with this id!"});
            return;
        }

        res.status(200).json(taskData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
  try {
    taskData = await Task.create(req.body);
  res.status(200).json(taskData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const taskData = await Task.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    res.status(200).json(taskData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
