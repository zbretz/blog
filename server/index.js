const express = require('express');

const app = express();

app.use(express.static(__dirname + '/../client/dist'));


app.get('/', (req, res) => {
 // res.send('Hello World!');
});

app.listen(8000, () =>
  console.log('Example app listening on port 8000!'),
);

