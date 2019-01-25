var express = require("express");
var path = require("path");

var app = express();

var PORT = process.env.PORT || 3000;

var exphbs = require("express-handlebars");

var db = require("./models");

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

// listen on port 3000
db.sequelize.sync().then(function(){
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
});
