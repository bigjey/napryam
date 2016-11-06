var app = require('./server');
var port = 7564;

app.listen(port, () => {
  console.log('listening on http://localhost:' + port);
});
