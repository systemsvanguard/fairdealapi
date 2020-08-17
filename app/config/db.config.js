// app/config/db.config.js
module.exports = {
  HOST:"localhost",
  USER: "developer",
  PASSWORD: "A10ShunOGr81!",
  DB: "fairdealautos",
  dialect: "postgres",
  pool: {
    max: 5, min: 0,
    acquire: 45000,
    idle: 12000
  }
};