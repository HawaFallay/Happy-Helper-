const { Task } = require('../models');

const taskData = [
    // {
    //     task: "Go for a walk",
    //     task_details: "I would like to go for a walk down my hallway. I have difficulty finding the motivation to just stand up and walk, but my doctor has warned me that I need to find some kind of exercise. My apartment is pet free. I do use a walker to help with my balance.",
    //     task_time: "2023-01-11T12:00",
    //     status: "Accepted",
    //     client_id: 1,
    //     helper_id: 1,
    // },
    // {
    //     task: "Help with groceries",
    //     task_details: "I would like help shopping at the grocery store. I recently had shoulder surgery, and I can't lift heavy objects. I can go with you to the store to help pick things out. I just need help carrying the items to the car and into my home.",
    //     task_time: "2023-01-12T15:25",
    //     status: "Open",
    //     client_id: 2,
    //     helper_id: null,
    // },
    // {
        
    //     task: "Help with groceries",
    //     task_details: "I need some help with grocery shopping. I recently had knee surgery, and it would be helpful if someone could grab some groceries for me. I need milk, eggs, flour, sugar",
    //     task_time: "Monday January 23rd at 11:00am",
    //     status: "Open",
    //     client_id: 3,
    //     helper_id: null,
    // },
    // {
    //     task: "Go for a walk",
    //     task_details: "I would like to go for a walk in my neighborhood. I'm elderly, and I would like someone to accompany me for a walk, so I can feel a little safer.",
    //     task_time: "Monday January 23rd at 12:00pm",
    //     status: "Completed",
    //     client_id: 4,
    //     helper_id: 2,
    // },
    // {
    //     task: "Dog Walk",
    //     task_details: "I'm feeling a little under the weather, and I could use some help with walking my dog. A 15-30 min walk with my dog would be most appreciated. I have an 8 year old Vizsla mix. She is very friendly and doesn't bark or bite.",
    //     task_time: "Sunday January 22nd at 1:00pm",
    //     status: "Open",
    //     client_id: 5,
    //     helper_id: null,
    // },
    // {
    //     task: "Go for a walk",
    //     task_details: "I would like to go for a half hour walk around my neighborhood.",
    //     task_time: "Tuesday January 24th at 3:00pm",
    //     status: "Open",
    //     client_id: 6,
    //     helper_id: null,
    // },
    // {
    //     task: "Go for a walk",
    //     task_details: "I need help to stay movtivated to exercise. I would appreciate anyone who would be willing to help keep my accountable by accompanying me on a walk. I would love to try to walk 3 miles.",
    //     task_time: "Friday January 27th at 5:00pm",
    //     status: "Open",
    //     client_id: 7,
    //     helper_id: null,
    // },
    
];

const seedTasks = () => Task.bulkCreate(taskData);

module.exports = seedTasks;