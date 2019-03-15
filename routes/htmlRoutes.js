var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("login-register", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });


  // Load Survey page
  app.get("/survey", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("survey-page", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });


  // Load Survey page
  app.get("/charades", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("charades", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

}