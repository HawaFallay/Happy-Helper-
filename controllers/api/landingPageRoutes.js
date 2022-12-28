const { helpers } = require('handlebars');
const bcrypt = require('bcrypt');
const Client = require('../../models/client')

const landingPageRoutes = require('express').Router();

landingPageRoutes.get('/', async (req,res) => {
    res.render('landingpage');
})

landingPageRoutes.post('/', async (req,res) => {
    try {
        userStoredInfo = Client.findOne({where: {username: req.body.username} });

        if(!userStoredInfo) {
            res.status(404).json({message: "login Failed. User not found"})
            return;
        }

        const validPassword = await bcrypt.compare (
            userStoredInfo.password,
            req.body.password
        )

        if(!validPassword) {
            res.status(404).json({message: "Incorrect Password"})
            return;
        }
        res.status(200).json("You are now logged")
        }
    catch (err) {
        res.status(500).json(err)
    }
})

module.exports = landingPageRoutes