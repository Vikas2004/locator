var express = require('express');
var app = express();
var env = require('dotenv').config()
// const router = require('./routes/router')
const mongoose = require("mongoose")
app.use(require('./routes/router'))

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect(process.env.ATLAS_URI, { useNewUrlParser: true, useUnifiedTopology: true }).then((res) =>{
   app.listen(3000, function () {
   return "Connected to Database"
   
 })
}).catch((e) => {
  console.log(e,"--error")
})