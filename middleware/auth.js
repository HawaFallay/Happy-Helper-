const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    // if(!req.cookies) {
    //     res.redirect('landingpage');
    //     return;
    // }

    try {
        const { loginToken } = req.cookies;

        const data = jwt.verify(loginToken, process.env.SECRET_ACCESS_TOKEN);

        if(!data) {
            res.redirect('landingpage')
        }
        console.log("This console log is from Auth Middleware " + JSON.stringify(data));
    }
    catch(error) {
        if(error) {
            res.redirect('landingpage');
        }
    }
    next()
}