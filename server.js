var express = require("express");
var path = require("path");

var app = express();

// Define routes here
app.use(express.static(path.join(__dirname, "/dist/ng-tic-tac-toe")));
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname + "/dist/ng-tic-tac-toe/index.html"));
});

// start the server listening for requests
app.listen(process.env.PORT || 3000, () => console.log("Server is running..."));
