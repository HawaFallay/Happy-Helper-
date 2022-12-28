const { helpers } = require('handlebars');
const bcrypt = require('bcrypt');
const Client = require('../../models/client')

const registerRoutes = require('express').Router();

registerRoutes.get('/', async (req, res) => {
    res.render('registerpage');
});

registerRoutes.get('/tableClient', async (req,res) => {
        // Get all books from the book table
       const bookData =  await Client.findAll()
          res.json(bookData);
});

registerRoutes.post('/', async (req,res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        Client.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        })
        res.send('/landingpage')
    } catch {
        res.redirect('/registerpage')
    }
});

module.exports = registerRoutes

