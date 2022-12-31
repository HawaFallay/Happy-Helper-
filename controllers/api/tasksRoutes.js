
const router = require('express').Router();
const { Task, Client, TaskStatus, Helper } = require('../../models');

router.get('/', async (req, res) => {
    try {
      const taskData = await Task.findAll({include: [{ model: Client}, {model: TaskStatus}, { model: Helper}] });
      res.status(200).json(taskData);
    } catch (err) {
        res.status(500).json(err);
    }
  });

router.post('/', (req, res) => {
    //use sequelize create method to add row to the table
    Tasks.create({
        id: req.body.id,
        task: req.body.task,
        task_details: req.body.task_details,
        task_time: req.body.task_time,
        status_id: req.body.status_id
    })
    .then((newTask) => {
        //send newly created row as JSON
        res.json(newTask)
    })
    .catch((err) =>{
        res.json(err);

    });
});






/*router.post('/', async (req, res)=>
    Tasks.findAll()
    .then(tasks => {
        console.log(tasks)
        res.sendStatus(200);
    })
    .catch(err => console.log(err))
);*/
module.exports = router;
