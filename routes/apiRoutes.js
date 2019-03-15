var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Get all user
  app.get("/api/users", function(req, res) {
    db.Users.findAll({}).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });

  // Create a new user
  app.post("/api/user", function(req, res) {
    db.Users.create(req.body).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });

  // Delete an user by id
  app.delete("/api/Users/:id", function(req, res) {
    db.Users.destroy({ where: { id: req.params.id } }).then(function(
      dbUsers
    ) {
      res.json(dbUsers);
    });
  });


    // Get all parties
  app.get("/api/parties", function(req, res) {
    db.Parties.findAll({}).then(function(dbParties) {
      res.json(dbParties);
    });
  });

  // Create a new parties
  app.post("/api/parties", function(req, res) {
    db.Parties.create(req.body).then(function(dbParties) {
      res.json(dbParties);
    });
  });

  // Delete an parties by id
  app.delete("/api/parties/:id", function(req, res) {
    db.Parties.destroy({ where: { id: req.params.id } }).then(function(dbParties) {
      res.json(dbParties);
    });
  });

















};
