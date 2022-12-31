const path = require('path');
const express = require('express');
const sequelize = require('./config/connection');
//const SequelizeStore = require('connect-session-sequelize')(session.Store);
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const session = require('express-session');
const helpers = require('./utils/helpers');
const bcrypt = require('bcrypt');
//importing mode to sync table with database
const Tasks = require ('./models/Tasks');
const jwt = require ('jsonwebtoken')
require('dotenv').config();
const cookieParser = require('cookie-parser');

const app = express();


const PORT = process.env.PORT || 3001;

// const sess = {
//   secret: 'secret',
//   resave: false,
//   saveUninitialized: true,
//   // trying to store sequelize data
//   store: new SequelizeStore({
//     db: sequelize
//   })
// };

// app.use(session(sess));

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening on: http://localhost:' + PORT));
});



