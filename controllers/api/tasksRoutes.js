
const router = require('express').Router();
const { Task, Client, TaskStatus, Helper } = require('../../models');
const pullData = require('../../middleware/pullData')

router.get('/', async (req, res) => {
    try {
      const taskData = await Task.findAll({ include: [{ model: Client}, {model: TaskStatus}, { model: Helper}] });
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

// router.post('/', async (req, res) => {
//     try {
//         const taskData = await Task.create(req.body);
//         res.status(200).json(taskData);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

//Was unable to get this to work, but not opposed to using it! Looks like a good way!
router.post('/', pullData, async (req, res) => {
    //use sequelize create method to add row to the table
    const { taskTitle, taskdeets, taskTime, location } = req.body
    console.log("Title: " + taskTitle)
    console.log("Details: " + taskdeets)
    console.log("Task_Time: " + taskTime)
    console.log("Location: " + location)
    console.log(req.username)
    // req.username to pull the username
    
    Task.create({
        task: req.body.taskTitle,
        task_details: req.body.taskdeets,
        task_time: req.body.taskTime,
        client_id: req.userData.id,
        helper_id: null
    })
    .then((newTask) => {
        //send newly created row as JSON
        res.json(newTask);
        console.log("User has been created")
    })
    .catch((err) =>{
        res.json(err);
    });
});

router.get('/task_status', (req, res) => {
    Task.findAll({
      // Order by title in ascending order
      order: ['task'],
      where: {
        // Only get books that have this boolean set to TRUE
        status_id: INTEGER
      },
    }).then((taskStatus) => {
      res.json(taskStatus);
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
