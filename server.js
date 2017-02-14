/**
 * Created by zhibin_zhang_MacPro15 on 2/12/17.
 */

var express = require('express');
var app = express();
var http = require('http').Server(app);

//app.set('view engine', 'ejs');


app.set("port", process.env.PORT || 3000);

app.get("/", function(req, res) {
  res.send("Hello world!");
});
app.listen(app.get("port"), function() {
  console.log("App started on port " + app.get("port"));
});
