var express = require('express');
var app = express();
var env = require('dotenv').config()
// const router = require('./routes/router')
const mongoose = require("mongoose")
app.use(require('./routes/router'))

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// const MongoClient = require('mongodb').MongoClient  


// const client = new MongoClient(process.env.ATLAS_URI, { useNewUrlParser: true });
// client.connect((err, database) => {
//   console.log("--goes to db--")
//   if (err) return console.log(err);
//   var database = database.db("locator");
//  app.listen(3000, function () {
//    return "Connected to Database"
   
//  })
// })

mongoose.connect(process.env.ATLAS_URI, { useNewUrlParser: true, useUnifiedTopology: true }).then((res) =>{
   app.listen(3000, function () {
   return "Connected to Database"
   
 })
}).catch((e) => {
  console.log(e,"--eror sjsas")
})