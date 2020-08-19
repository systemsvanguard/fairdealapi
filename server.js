// server.js
// configure variables & setup app
require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = process.env.PORT || 8080;
const HOST = process.env.HOST || 'localhost';

const app = express();

var corsOptions = {  origin: "http://localhost:8081"  };
app.use(cors(corsOptions));

// parse requests of URLencoded, and of JSON content types
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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
  res.json({message: `Welcome! Fair Deal Auto Works - Portfolio demo app of a REStful API CRUD. Built using Node.js, Express.js, MySQL, and Sequelize ORM. Available now in your favourite web browser at http://${HOST}:${port}/. Enjoy!`} );
});

require("./app/routes/main.routes")(app);

// start app
app.listen(port, () => {
  console.log(`Welcome to the Auto Shop API! The app is started on port ${port}, and is available at http://${HOST}:${port}/. Enjoy!` );
});

  /* 
  To start the default web browser from the command line: 
  Windows ~ run 'start http://localhost:8088/'. 
  Mac     ~ run 'open http://localhost:8088/'.   
  */
