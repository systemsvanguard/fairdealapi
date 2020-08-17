// app/routes/main.routes.js
module.exports = app => {
  const jobs = require('../controllers/job.controller');
  const express = require('express');
  const path    = require('path');
  // create, then export our router object
  var router = require('express').Router();
  module.exports = router;

/*
Routes
==============================
1. -> create new job --> post('/')   | C - CRUD | Post
2. -> Get/ Retrieve/ Read ALL tasks/jobs from the database --> get('/')  | R - CRUD | Get
3. -> Find ALL fixed/ resolved tasks/jobs --> get('/fixed')  | R - CRUD | Get
4. -> Get a specific task/job by ID # --> get('/:id')| R - CRUD | Get
5. -> Edit/Update a specific task/job by ID # --> put('/:id') | U - CRUD | PUT
6. -> Erase a specific task/job by ID #  --> delete('/:id') | D - CRUD | Delete
7. -> Erase ALL tasks/jobs from the database --> delete('/') | D - CRUD | Delete
*/

//-------------------------->
// create new job --> post('/')   | C - CRUD | Post
router.post('/', jobs.create);

// Get/ Retrieve/ Read ALL tasks/jobs from the database --> get('/')  | R - CRUD | Get
router.get('/', jobs.findAll);

// Find ALL fixed/ resolved tasks/jobs --> get('/fixed')  | R - CRUD | Get
router.get('/fixed', jobs.findAllFixed);

// Get a specific task/job by ID # --> get('/:id')| R - CRUD | Get
router.get('/:id', jobs.findOne);

// Edit/Update a specific task/job by ID # --> put('/:id') | U - CRUD | PUT
router.put('/:id', jobs.update);

// Erase a specific task/job by ID #  --> delete('/:id') | D - CRUD | Delete
router.delete('/:id', jobs.delete);

// Erase ALL tasks/jobs from the database --> delete('/') | D - CRUD | Delete
router.delete('/', jobs.deleteAll);

//-------------------------->
router.get('/about', function(req, res) {
  res.render('pages/about');
});

router.get('/contact', function(req, res) {
  res.render('pages/contact');
});
//-------------------------->


  app.use('/api/jobs', router);
};
