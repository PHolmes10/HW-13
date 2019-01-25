var path = require('path');
var express = require('express');
var router = express.Router();

module.exports = function (app) {
    app.get("/", function(req, res) {
        res.render(path.join(__dirname, "../views/index.handlebars"));
      });
    };

    
