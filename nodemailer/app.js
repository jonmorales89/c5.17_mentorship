// Require modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3001;


app.disable('x-powered-by');

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));





app.listen(PORT, () => {
  console.log('Firing up something hot on PORT: ', PORT);
});
