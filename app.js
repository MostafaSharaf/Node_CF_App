////
const express = require('express'), app = express();
const os = require('os');
const PORT = process.env.PORT;
//
app.get('/', (req, res) => {
  res.send('Hello World Node app, listening at http://localhost:' + listener.address().port + ', at conatiner؛ ' + os.hostname);
});
//
var listener = app.listen(PORT || 3000, () => {
  console.log('Example app listening at http://localhost:' + listener.address().port + ', at conatiner؛ ' + os.hostname);
});
//
