var db = require("../models");

module.exports = function(app) {
  // app.get("/burgers", function(req, res) {
  //   // 1. Add a join to include all of each Author's Posts
  //   db.Burger.findAll({
  //   }).then(function(dbBurger) {
  //     res.json(dbBurger);
  //     console.log(dbBurger);
  //   });
  // });

  app.get("/", function(req, res) {
    // send us to the next get function instead.
    res.redirect("/burgers");
  });
  
  // get route, edited to match sequelize
  app.get("/burgers", function(req, res) {
    // replace old function with sequelize function
    db.Burger.findAll()
      // use promise method to pass the burgers...
      .then(function(dbBurger) {
        console.log(dbBurger);
        // into the main index, updating the page
        var hbsObject = { burger: dbBurger };
        return res.render("index", hbsObject);
      });
  });

  // post route -> back to index
app.post("/burgers/create", function(req, res) {
  // takes the request object using it as input for burger.addBurger
  db.Burger.create({
    burger_name: req.body.burger_name
  }).then(function(data) {
    res.redirect("/");
  });
});

//   app.get("/api/authors/:id", function(req, res) {
//     // 2; Add a join to include all of the Author's Posts here
//     db.Author.findOne({
//       where: {
//         id: req.params.id
//       },
//       include: [db.Post]
//     }).then(function(dbAuthor) {
//       res.json(dbAuthor);
//     });
//   });

//   app.post("/api/authors", function(req, res) {
//     db.Author.create(req.body).then(function(dbAuthor) {
//       res.json(dbAuthor);
//     });
//   });

//   app.delete("/api/authors/:id", function(req, res) {
//     db.Author.destroy({
//       where: {
//         id: req.params.id
//       }
//     }).then(function(dbAuthor) {
//       res.json(dbAuthor);
//     });
//   });

};