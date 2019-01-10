var path = require('path');

module.exports = function (app) {
    app.get("/burgers", function(req, res) {
        // If the user already has an account send them to the home page
        res.sendFile(path.join(__dirname, "../views/layouts/main.handlebars"));
      });
    };