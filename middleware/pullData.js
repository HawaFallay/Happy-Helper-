module.exports = (req, res, next) => {
    const { loginToken } = req.cookies;
    console.log(loginToken)
    const coadedPayload = loginToken.split('.')[1];
    const decodedPayload = JSON.parse(atob(coadedPayload));
    console.log("This is the decoded data "+ JSON.stringify(decodedPayload));
    const {username} = decodedPayload;
    console.log(username)
    req.username = username
    next()  
}