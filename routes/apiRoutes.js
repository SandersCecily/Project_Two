var db = require("../models");
var passport = require("../config/passport");


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
  app.get("/api/user", function(req, res) {
    db.User.findAll({}).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  // Create a new user
  app.post("/api/user", function(req, res) {
    db.User.create(req.body).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  // Delete an user by id
  app.delete("/api/User/:id", function(req, res) {
    db.User.destroy({ where: { id: req.params.id } }).then(function(
      dbUser
    ) {
      res.json(dbUser);
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






  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
    // So we're sending the user back the route to the members page because the redirect will happen on the front end
    // They won't get this or even be able to access this page if they aren't authed
    res.json("/");
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function(req, res) {
    console.log(req.body);
    db.User.create({
      user_name: req.body.user_name,
      email: req.body.email,
      password: req.body.password,
      age_greater_21: req.body.age_greater_21
    })
      .then(function() {
        res.redirect(307, "/api/login");
      })
      .catch(function(err) {
        console.log(err);
        res.json(err);
        // res.status(422).json(err.errors[0].message);
      });
  });

  // Route for logging user out
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        user_name: req.user.user_name,
        email: req.user.email,
        id: req.user.id
      });
    }
  });




};
