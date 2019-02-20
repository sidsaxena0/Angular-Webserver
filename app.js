var express = require('express'),
    path = require('path'),
    app = express();

app.use(express.static(path.join(__dirname, 'www')));
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'www/index.html'));
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, sessionStoreService, x-session-token");
  next();
});

app.listen(8080);