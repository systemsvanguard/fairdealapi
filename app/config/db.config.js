// app/config/db.config.js
// see the application's .env file at file root
module.exports = {
    HOST: process.env.HOST,
    USER: process.env.USER,
    PASSWORD: process.env.PASSWORD,
    DB: process.env.DB,   
    dialect: "mysql",
    pool: {
      max: 5, min: 0,
      acquire: 40000,
      idle: 12000
    }
  };
