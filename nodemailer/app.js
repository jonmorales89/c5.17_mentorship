// Require modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());




app.listen(PORT, () => {
  console.log('Firing up something hot on PORT: ', PORT);
});
