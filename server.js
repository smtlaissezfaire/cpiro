var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.listen(6669);
console.log('Listening on port 6669');