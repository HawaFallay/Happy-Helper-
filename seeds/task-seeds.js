const { Task } = require('../models');

const taskData = [
    {
        task: "Go for a walk",
        task_details: "I would like to go for a walk down my hallway. I have difficulty finding the motivation to just stand up and walk, but my doctor has warned me that I need to find some kind of exercise. My apartment is pet free. I do use a walker to help with my balance.",
        task_time: "Wednesday January 11th at 12:00pm",
        status_id: 2,
        client_id: 1,
    },
    {
        task: "Help with groceries",
        task_details: "I would like help shopping at the grocery store. I recently had shoulder surgery, and I can't lift heavy objects. I can go with you to the store to help pick things out. I just need help carrying the items to the car and into my home.",
        task_time: "Friday January 13th at 12:00pm",
        status_id: 1,
        client_id: 2,
    },
    {
        
        task: "Help with groceries",
        task_details: "I need some help with grocery shopping. I recently had knee surgery, and it would be helpful if someone could grab some groceries for me. I need milk, eggs, flour, sugar",
        task_time: "Monday January 23rd at 11:00am",
        status_id: 1,
        client_id: 3,
    },
    {
        task: "Go for a walk",
        task_details: "I would like to go for a walk in my neighborhood. I'm elderly, and I would like someone to accompany me for a walk, so I can feel a little safer.",
        task_time: "Monday January 23rd at 12:00pm",
        status_id: 3,
        client_id: 4,
    },
    
];

const seedTasks = () => Task.bulkCreate(taskData);

module.exports = seedTasks;