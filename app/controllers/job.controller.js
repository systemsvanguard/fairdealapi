// app/controllers/job.controllers.js
const db = require('../models');
const Job = db.jobs;
const Op = db.Sequelize.Op;

/*
STEPS
==============================
1. ~ Make/ Create a new auto repair task/job  | C - CRUD | Post
2. ~ Get/ Retrieve/ Read ALL tasks/jobs from the database  | R - CRUD | Get
3. ~ Find ALL fixed/ resolved tasks/jobs  | R - CRUD | Get
4. ~ Get a specific task/job by ID # | R - CRUD | Get
5. ~ Edit/Update a specific task/job by ID # | U - CRUD | Update ~ PUT
6. ~ Erase a specific task/job by ID #  | D - CRUD | Delete
7. ~ Erase ALL tasks/jobs from the database  | D - CRUD | Delete
*/


// Create & save a new job/task | C - CRUD | Post.
exports.create = (req,res) => {
  /* field validation */
  if (!req.body.issue) {
    req.status(400).send( { message: "This field cannot be empty." }) ;
    return;
  }
  /* create auto repair job */
  const job = {
    plate: req.body.plate,
    issue: req.body.issue,
    description: req.body.description,
    fixed: req.body.fixed ? req.body.fixed : false ,
    notes: req.body.notes
  };
  /* save task/job */
  Job.create(job)
    .then(data => {
      res.send.(data);
    } )
    .catch(err => {
      res.status(500).send({
        message: err.message || "An error occured while creating the new auto repair job."
      });
    } );
}


// Get ALL tasks/jobs from the database  | R - CRUD | Get
exports.findAll = (req, res) => {
  const issue = req.query.issue;
  var condition = issue ? {issue: {[Op.iLike]: `%${issue}%` } } : null;
  Job.findAll({ where:condition })
    .then(data => {
      res.send(data);
    } )
    .catch(err => {
      res.status(500).send({
        message: err.message || "Oh, no! An error occurred while retrieving auto repair jobs."
      });
    });
};


// Find ALL fixed/ resolved tasks/jobs  | R - CRUD | Get
exports.findAllFixed = (req, res) => {
  Job.findAll({ where: {fixed: true} })
    .then(data => {
      res.send(data);
    } )
    .catch(err => {
      res.status(500).send({
        message: err.message || "Oops! An error occurred in retrieving the list of tasks/jobs."
      });
    } );
};

// Get a specific task/job by ID # | R - CRUD | Get
exports.findOne = (req, res) => {
  const id = req.params.id;

  Job.findById(id)
    .then(data => {
      res.send(data);
    } )
    .catch(err => {
      res.status(500).send({
        message: `There was an error getting the auto repair job with ID # ${id}.`
      });
    } );
};


// Edit/Update a specific task/job by ID # | U - CRUD | Update ~ PUT
exports.update = (req, res) => {
  const id = req.params.id;
  Job.update(req.body, {
    where : {id: id}
  } )
  .then (num => {
    if (num == 1) {
      res.send({ message: `Success! Job task with ID # ${id} was updated.`  });
    }
    else {
      res.send({ message: `Unable to update job task with ID # ${id}. Job not found, or request body was empty. Please try again.`  });
    }
  } )
  .catch(err => {
    res.status(500).send({ message: `Error updating job task with ID # ${id}. 500 error. Please try again.`  });
  } );
};



// Erase a specific task/job by ID #  | D - CRUD | Delete
exports.delete = (req, res) => {
  const id = req.params.id;

  Job.destroy({
    where: {id: id}
  })
  .then(num => {
    if (num == 1) {
      res.send({ message: `Success. Auto repair job/task - ID # ${id} was deleted successfully.`  });
    }
    else {
      res.send({ message: `Delete Failed! Possibly record NOT found. Auto repair job/task - ID # ${id} was not removed/deleted.`  });
    }
  })
  .catch(err => {
    res.status(500).send({ message: `Deletion Error! Unable to delete / remove auto repair job task with ID # ${id}. 500 error. Please try again.`  });
  });
};



// Erase ALL tasks/jobs from the database  | D - CRUD | Delete
exports.deleteAll = (req,res) => {
  Job.destoy({
    where: {}, truncate: false
  } )
    .then(nums => {
      res.send({message: `${nums} jobs/tasks were successfully deleted.`});
    } )
    .catch(err => {
      res.status(500).send({ message: `Error! Unable to delete all records.  500 error. Please try again.`  });
    } );
};
