var express = require('express');
var app = express();
var env = require('dotenv').config()
app.get('/', function (req, res) {
  res.send('Hello World!');
});
const MongoClient = require('mongodb').MongoClient  


const client = new MongoClient(process.env.ATLAS_URI, { useNewUrlParser: true });
client.connect((err, database) => {
  console.log("--goes to db--")
  if (err) return console.log(err);
  var database = database.db("locator");
 app.listen(3000, function () {
   return "Connected to Database"
   
 })
})