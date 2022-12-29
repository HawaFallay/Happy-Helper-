const { helpers } = require('handlebars');
const bcrypt = require('bcrypt');
const Client = require('../../models/client')
const Helpers = require('../../models/helper')

const landingPageRoutes = require('express').Router();

landingPageRoutes.get('/', async (req,res) => {
    res.render('landingpage');
})

landingPageRoutes.post('/', async (req,res) => {
    try {
        console.log(req.body);
    if(req.body.roleLogin === "client") {
        clientStoredInfo = await Client.findOne({where: {username: req.body.username} });
        //console.log(clientStoredInfo.dataValues.password);

        if(!clientStoredInfo) {
            res.status(404).json({message: "login Failed. User not found"})
            return;
        }

        const validPassword = await bcrypt.compare (
            req.body.password,
            clientStoredInfo.dataValues.password,
        )
        //console.log("Console log for valid password bro " + validPassword);

        if(!validPassword) {
            res.status(404).json({message: "Incorrect Password"})
            return;
        }

        if(clientStoredInfo.dataValues.role_title === "client"){
            res.status(200).render('clientpage')
        }
    }
    else {

    if(req.body.roleLogin === "helper")
    helperStoredInfo = await Helpers.findOne({where: {username: req.body.username} });
    //console.log(helperStoredInfo.dataValues.password);

    if(!helperStoredInfo) {
        res.status(404).json({message: "login Failed. User not found"})
        return;
    }

    const validPassword = await bcrypt.compare (
        req.body.password,
        helperStoredInfo.dataValues.password,
    )
    //console.log("Console log for valid password bro " + validPassword);

    if(!validPassword) {
        res.status(404).json({message: "Incorrect Password"})
        return;
    }

    if(helperStoredInfo.dataValues.role_title === "helper"){
        res.status(200).render('helpers')
    }  

    }
    }
    catch (err) {
        res.status(500).json(err)
    }
})

module.exports = landingPageRoutes