var express = require('express');
var app = express();
var env = require('dotenv').config()
// const router = require('./routes/router')
const mongoose = require("mongoose")
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

var bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

mongoose.connect(process.env.ATLAS_URI, { useNewUrlParser: true, useUnifiedTopology: true }).then((res) =>{
   app.listen(3000, function () {
   return "Connected to Database"
   
 })
}).catch((e) => {
  console.log(e,"--error")
})

app.use(require('./routes/router'))