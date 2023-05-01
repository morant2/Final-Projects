const express = require('express');
const path = require('path');
const jokes = require('./controllers/jokes');
const meals = require('./controllers/meals');
const app = express();

const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;

//Middleware
app
  .use(express.json())
  .use(express.static(path.join(__dirname, '../healthapp/dist')))


//Actions  
app
  .get('/', (req, res) => {
    res.send('Hello World! from Express')
  })
  .use('/api/v1/', meals)
  .use('/api/v1/jokes', jokes)


//Catch All
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../healthapp/dist/index.html'));
})

console.log('1: About to start server')


app.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


console.log('3: Asked server to start')