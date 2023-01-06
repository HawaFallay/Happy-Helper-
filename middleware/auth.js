const jwt = require('jsonwebtoken');
const { Client } = require('../models')

module.exports = async (req, res, next) => {
    try {
        const { loginToken } = req.cookies;

        const data = await jwt.verify(loginToken, process.env.SECRET_ACCESS_TOKEN);

        const { username } = data
        const userData = await Client.findOne({where: {username: username}});
        req.userData = userData;
        console.log("following is the user data: " + userData)
        req.username = username;

        if(!data) {
            res.redirect('/')
        }
        console.log("This console log is from Auth Middleware " + JSON.stringify(data));
    }
    catch(error) {
        if(error) {
            res.redirect('/');
        }
    }

    next()
}