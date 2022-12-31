const router = require('express').Router();
const { Helper, Task } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const helperData = await Helper.findAll({ Task });
        res.status(200).json(helperData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;