// app/models/job.model.js
/* auto repair jobs - data model  */
module.exports = (sequelize, Sequelize) => {
  const Job = sequelize.define("job", {
    title: {  type: Sequelize.STRING  },
	plate: {  type: Sequelize.STRING  },
    description: {  type: Sequelize.STRING(330)  },
	notes: {  type: Sequelize.STRING(460)  },
    resolved: {  type: Sequelize.BOOLEAN  }
  });

  return Job; 
};