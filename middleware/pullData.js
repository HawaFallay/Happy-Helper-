const jwt = require('jsonwebtoken');
const { Client } = require('../models')

module.exports = async (req, res, next) => {

    const { loginToken } = req.cookies;

    const data = await jwt.verify(loginToken, process.env.SECRET_ACCESS_TOKEN);

    const { username } = data
    const userData = await Client.findOne({where: {username: username}});
    req.userData = userData;
    //console.log("following is the user data: " + userData)
    req.username = username;
    next()  
}