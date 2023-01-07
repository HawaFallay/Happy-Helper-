const jwt = require('jsonwebtoken');
const { Client, Helper } = require('../models')

module.exports = async (req, res, next) => {

    const { loginToken } = req.cookies;

    const data = await jwt.verify(loginToken, process.env.SECRET_ACCESS_TOKEN);
    
    const { username } = data

    const userClientData = await Client.findOne({where: {username: username}});
    req.userClientData = userClientData;
    const userHelperData = await Helper.findOne({where: {username: username}});
    req.userHelperData = userHelperData;

    req.username = username;

    next()  
}