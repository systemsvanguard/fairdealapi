// app/routes/main.routes.js
module.exports = app => {
  const jobs = require("../controllers/job.controller.js");
  var router = require("express").Router();

	/*
	Routes
	==============================
	1. -> create new job --> post('/')   | C - CRUD | Post
	2. -> Get/ Retrieve/ Read ALL tasks/jobs from the database --> get('/')  | R - CRUD | Get
	3. -> Find ALL fixed/ resolved tasks/jobs --> get('/resolved')  | R - CRUD | Get
	4. -> Get a specific task/job by ID # --> get('/:id')| R - CRUD | Get
	5. -> Edit/Update a specific task/job by ID # --> put('/:id') | U - CRUD | PUT
	6. -> Erase a specific task/job by ID #  --> delete('/:id') | D - CRUD | Delete
	7. -> Erase ALL tasks/jobs from the database --> delete('/') | D - CRUD | Delete
	*/

  //-------------------------->
  // Create new job --> post('/')   | C - CRUD | Post
  router.post("/", jobs.create);

  // Get/ Retrieve/ Read ALL tasks/jobs from the database --> get('/')  | R - CRUD | Get
  router.get("/", jobs.findAll);

  // Find ALL fixed/ resolved tasks/jobs --> get('/resolved')  | R - CRUD | Get
  router.get("/resolved", jobs.findAllResolved);

  // Get a specific task/job by ID # --> get('/:id')| R - CRUD | Get
  router.get("/:id", jobs.findOne);

  // Edit/Update a specific task/job by ID # --> put('/:id') | U - CRUD | PUT
  router.put("/:id", jobs.update);

  // Erase a specific task/job by ID #  --> delete('/:id') | D - CRUD | Delete
  router.delete("/:id", jobs.delete);

  // Erase ALL tasks/jobs from the database --> delete('/') | D - CRUD | Delete
  router.delete("/", jobs.deleteAll);
  //-------------------------->


  app.use("/api/jobs", router);
};
