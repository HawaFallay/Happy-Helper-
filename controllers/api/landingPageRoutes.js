const { helpers } = require('handlebars');
const bcrypt = require('bcrypt');
const Client = require('../../models/client');
const Helpers = require('../../models/helper');
const jwt = require ('jsonwebtoken');

const landingPageRoutes = require('express').Router();

landingPageRoutes.get('/', async (req,res) => {
    res.render('landingpage');
});

landingPageRoutes.post('/', async (req,res) => {
    try {
        const accessToken = jwt.sign({username: req.body.username},process.env.SECRET_ACCESS_TOKEN, { expiresIn: '1d' })
        res.cookie('loginToken', accessToken/*, { httpOnly:true }*/)
        console.log(req.body);
    if(req.body.roleLogin === "client") {
        clientStoredInfo = await Client.findOne({where: {username: req.body.username} });


        if(!clientStoredInfo) {
            return res.status(404).json({message: "login Failed. User not found"})
            ;
        }

        const validPassword = await bcrypt.compare (
            req.body.password,
            clientStoredInfo.dataValues.password,
        )
        //console.log("Console log for valid password bro " + validPassword);

        if(!validPassword) {
            return res.status(404).json({message: "Incorrect Password"});
        }

        if(clientStoredInfo.dataValues.role_title === "client"){
            return res.status(200).redirect('/clientpage')
        }
    }
    else {

    if(req.body.roleLogin === "helper")
    helperStoredInfo = await Helpers.findOne({where: {username: req.body.username} });

    if(!helperStoredInfo) {
        return res.status(404).json({message: "login Failed. User not found"});
    }

    const validPassword = await bcrypt.compare (
        req.body.password,
        helperStoredInfo.dataValues.password,
    )

    if(!validPassword) {
        return res.status(404).json({message: "Incorrect Password"});
        
    }

    if(helperStoredInfo.dataValues.role_title === "helper"){
        return res.status(200).redirect('/helpers');
    }  
    }
    }

    catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
})

module.exports = landingPageRoutes