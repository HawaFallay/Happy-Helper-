const router = require('express').Router();

const { Role, Client } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const roleData = await Role.findAll({include: Client});
        res.status(200).json(roleData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;