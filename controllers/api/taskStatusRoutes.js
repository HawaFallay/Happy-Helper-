// const router = require('express').Router();
// const { Task, TaskStatus, Client } = require('../../models');

// router.get('/', async (req, res) => {
//     try {
//         const statusData = await TaskStatus.findAll({ include: Task });
//         res.status(200).json(statusData);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// //Can get task by status. Would be nice to get task by status with the associated client
// router.get('/:id', async (req, res) => {
//     try {
//         const statusData = await TaskStatus.findByPk(req.params.id, { include: Task });
//         if (!statusData) {
//             res.status(404).json({message: "No task status found with this id!"});
//         }

//         res.status(200).json(statusData);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// router.put('/:id', async (req, res) => {
//     try {
//         const statusData = await TaskStatus.update(req.body, {
//             where: {
//                 id: req.params.id
//             }
//         });
//         res.status(200).json(statusData);
//     } catch (err) {
//         res.status(400).json(err);
//     }
// });

// //add router.put for status

// module.exports = router;