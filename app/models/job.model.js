const { sequelize, Sequelize } = require(".");

// app/models/job.model.js
module.exports = (sequelize, Sequelize) => {
  const Job = sequelize.define('job', {
    plate: {type: Sequelize.STRING },
    issue: {type: Sequelize.STRING },
    description: {type: Sequelize.STRING },
    fixed: {type: Sequelize.BOOLEAN },
    notes: {type: Sequelize.STRING }
  } );

  return Job;
};
