const express = require('express')
const app = express()
const port = 3000
const db = require('./db')

var bodyParser = require('body-parser')

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods: POST, GET, OPTIONS, preflightContinue": false');
  next();
});

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res, next) => {

})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})