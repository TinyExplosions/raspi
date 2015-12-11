var express = require('express');
var app = express();
var port = 8000;
var host = '0.0.0.0';

app.use(express.static(__dirname + '/public'));

app.listen(port, host, function() {
    console.log("App started at: " + new Date() + " on port: " + port);
});
