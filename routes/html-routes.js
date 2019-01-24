var path = require('path');

module.exports = function (app) {
    app.get("/", function(req, res) {
        // If the user already has an account send them to the home page
        res.render(path.join(__dirname, "../views/index.handlebars"));
      });
    };
