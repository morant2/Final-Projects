require('dotenv').config()
const express = require('express')
const path = require('path');
const meals = require('./controllers/meals');
const workouts = require('./controllers/workouts');
const users = require('./controllers/users');
//const { requireLogin } = require('./middleware/authorization')
const app = express();

const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;

//Middleware
app
  .use(express.json())
  .use(express.static(path.join(__dirname, '../client/dist')))

  .use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin,X-Requested-With,Content-Type,Accept')
    res.header('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE')
    
    if(req.method === 'OPTIONS') {
      return res.status(200).send({})
    }
    next()
  })

//Actions  
app
  .get('/api/v1', (req, res) => {
    res.send('Hello World! from Express')
  })
  .use('/api/v1/meals', meals)
  .use('/api/v1/workouts', workouts)
  .use('/api/v1/users', users)



//Catch All
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
})


//Error Handling
app
  .use((err, req, res, next) => {
    console.error(err);
    const msg = {
      status: err.code || 500,
      error : err.message || 'Internal Server Error',
      isSuccess: false
    }
    res.status(msg.status).json(msg)
    })

console.log('1: About to start server')


app.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


console.log('3: Asked server to start')