const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
    try {
        const { loginToken } = req.cookies;

        const data = await jwt.verify(loginToken, process.env.SECRET_ACCESS_TOKEN);

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