const express = require('express');
const app = express();

app.get('/', () => {
  res.send('Some Dummy data')
});

app.listen(3050, () => {
  console.log('Application fired.')
});
