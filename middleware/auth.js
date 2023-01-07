const jwt = require('jsonwebtoken');
const { Client, Helper } = require('../models')

module.exports = async (req, res, next) => {
    try {
        const { loginToken } = req.cookies;

        const data = await jwt.verify(loginToken, process.env.SECRET_ACCESS_TOKEN);

        const { username } = data
        const userClientData = await Client.findOne({where: {username: username}});
        req.userClientData = userClientData;
        const userHelperData = await Helper.findOne({where: {username: username}});
        req.userHelperData = userHelperData;

        req.username = username;

        if(!data) {
            res.redirect('/')
        }
    }
    catch(error) {
        if(error) {
            res.redirect('/');
        }
    }

    next()
}