const express = require('express');

const app = express();

const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;


app.
  use(express.json());


app
  .get('/', (req, res) => {
    res.send('Hello World! from Express')
  })
  .use()

app.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});