// app/config/db.config.js
module.exports = {
  HOST: "localhost",
  USER: "developer",
  PASSWORD: "myF@k3P@55W0rd!",
  DB: "fairdealautos",
  dialect: "mysql",
  pool: {
    max: 5, min: 0,
    acquire: 40000,
    idle: 12000
  }
};