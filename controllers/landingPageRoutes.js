const { helpers } = require('handlebars');

const landingPageRoutes = require('express').Router();

landingPageRoutes.get('/', async (req,res) => {
    res.render('landingpage');
})

landingPageRoutes.post('/',(req,res) => {

})

module.exports = landingPageRoutes