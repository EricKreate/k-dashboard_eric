var path = require('path');
var express = require('express');
var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.set('port', process.env.PORT || 8080);

app.get("/", function (req, res) {
	res.sendfile("index.html");
});

app.get("/*", function (req, res) {
	res.sendfile(__dirname + "/" + req.params[0]);
});

app.listen(app.get('port'), function () {
	console.log('Kreate Dashboard running on port ' + app.get('port'));
});