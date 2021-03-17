var express = require('express');
var app = express();
var cors = require('cors')
var env = require('dotenv').config()
// const router = require('./routes/router')
const mongoose = require("mongoose")
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

var bodyParser = require('body-parser')


app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

mongoose.connect("mongodb+srv://vikas2005:vikas2005@locator.mkp5q.mongodb.net/locator?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true }).then((res) =>{
   app.listen(3001, function () {
   return "Connected to Database"
   
 })
}).catch((e) => {
  console.log(e,"--error")
})

app.use(require('./routes/router'))
app.use(cors())