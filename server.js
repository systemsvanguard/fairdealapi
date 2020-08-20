// server.js  static 
// configure variables & setup app
require('dotenv').config();
const express = require("express");
const path = require('path')
const expressLayouts 	= require('express-ejs-layouts');
const bodyParser = require("body-parser"); 
const cors = require("cors");
const port = process.env.PORT || 8080;
const WEBHOST = process.env.WEBHOST || 'localhost';

const app = express();

var corsOptions = {  origin: "http://localhost:8081"  };
app.use(cors(corsOptions));

// use ejs and express layouts. MUST come before routing!
app.set('view engine', 'ejs');
app.use(expressLayouts);

// parse requests of URLencoded, and of JSON content types
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// configure static files location
// app.use(express.static(__dirname + '/public/'));
app.use('/static', express.static(path.join(__dirname, 'public')))
// app.use(express.static('public'));

const db = require("./app/models");
db.sequelize.sync();
// if table is pre-existing, we may need to drop & re-build it.
/*
 db.sequelize.sync({ force: true }).then(() => {
   console.log("Drop and re-sync db.");
 });
*/


// app routing
app.get("/", (req, res) => {
  res.json({message: `Welcome fellow coder! Fair Deal Auto Works - Portfolio demo app of a REStful API CRUD. Built using Node.js, Express.js, MySQL, and Sequelize ORM. Available now in your favourite web browser at http://${WEBHOST}:${port}/. Enjoy!`} );
});

require("./app/routes/main.routes")(app);

app.get('/about', function(req, res) {
    res.sendFile(path.join(__dirname + '/about.html'));
});



// start app
app.listen(port, () => {
  console.log(`Welcome to the Auto Shop API! The app is started on port ${port}, and is available at http://${WEBHOST}:${port}/. Enjoy!` );
});

  /* 
  To start the default web browser from the command line: 
  Windows ~ run 'start http://localhost:8080/'. 
  Mac     ~ run 'open http://localhost:8080/'.   
  */
