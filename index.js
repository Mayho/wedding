const express = require('express');
const app = express();

// Store all environment variables
app.set('port', process.env.PORT || 8080);
app.set('env', process.env.NODE_ENV || 'production');

// App middleware
app.use(express.static('./'));

app.listen(app.get('port'), function () {
  console.log('Please go to localhost:' + app.get('port') + ' in your web browser.');
});