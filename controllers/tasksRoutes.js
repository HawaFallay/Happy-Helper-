const express = require('express');
const { INTEGER } = require('sequelize');
const router = express.Router();
//const sequelize = require('./config/connection');
const Tasks = require('../models/tasks');



router.get('/task_status', (req, res) => {
    Book.findAll({
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
