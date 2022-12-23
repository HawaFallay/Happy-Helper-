const { helpers } = require('handlebars');
const bcrypt = require('bcrypt');

//using this to store username for now, needs to be saved to DB
let userPasswords = [];

const registerRoutes = require('express').Router();

registerRoutes.get('/', async (req,res) => {
    res.render('registerpage');
});

registerRoutes.post('/', async (req,res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        userPasswords.push({
            id: Date.now().toString(),
            name: req.body.name,
            email: req.body.email,
            password: req.body.hashedPassword
        })
        res.redirect('/landingpage')
    } catch {
        res.redirect('/registerpage')
    }
    console.log(userPasswords)
});

module.exports = registerRoutes