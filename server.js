// server.js
// configure variables & setup app
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const expressLayouts 	= require('express-ejs-layouts');
const port = process.env.PORT || 8080;
const cors = require('cors');

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// use ejs and express layouts. MUST come before routing!
app.set('view engine', 'ejs');
app.use(expressLayouts);
// parse requests of URLencoded, and of JSON content types
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// database connection
const db = require('./app/models/index');
db.sequelize.sync();
// if table is pre-existing, we may need to drop & re-build it.
/*
db.sequelize.sync({force: true} ).then(() => {
  console.log('Destroy, rebuild, & synchronize database');
} )  ;
*/

// app routing
app.get('/', (req, res) => {
  res.json({message: "Welcome! Fair Deal Auto Works - Portfolio demo app of a REStful API CRUD. Built using Node.js, Express.js, PostgreSQL, and Sequelize ORM."} );
} );

// require('./app/routes/main.routes' )(app) ;
var router = require('./app/routes/main.routes');
app.use('/', router);
// configure static files location
app.use(express.static(__dirname + '/public'));


// start app
app.listen(port, () => {
  console.log(`Welcome! The app is started on port ${port}, and is available at http://localhost:${port}/. Enjoy!` );
} );
