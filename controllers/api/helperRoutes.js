const router = require('express').Router();
const { Helper } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const helperData = await Helper.findAll();
        res.status(200).json(helperData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;