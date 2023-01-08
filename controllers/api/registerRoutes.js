const { helpers } = require('handlebars');
const bcrypt = require('bcrypt');
const Client = require('../../models/client');
const Helpers = require('../../models/helper');

const registerRoutes = require('express').Router();

// registerRoutes.get('/', async (req, res) => {
//     res.render('registerpage', {
//         style: 'registerpage.css'
//     });
// });

registerRoutes.get('/registerConfirmation', async (req,res) => {
    res.render('registerConfirmation');
});

registerRoutes.get('/tableClient', async (req,res) => {
        // Get all books from the book table
       const bookData =  await Client.findAll()
          res.json(bookData);
});

registerRoutes.get('/tableHelper', async (req,res) => {
        // Get all books from the book table
       const bookData =  await Helpers.findAll()
          res.json(bookData);
});

registerRoutes.post('/', async (req,res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        if(req.body.role_title === "client") {
            Client.create({
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                username: req.body.username,
                email: req.body.email,
                password: hashedPassword,
                role_title: req.body.role_title,
                location: req.body.location
            })
        }
        else {
            Helpers.create({
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                username: req.body.username,
                email: req.body.email,
                password: hashedPassword,
                role_title: req.body.role_title,
                location: req.body.location
            })
        }
        res.render('registerConfirmation')
    } catch {
        res.redirect('/registerpage')
    }
});

module.exports = registerRoutes

