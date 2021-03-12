"use strict";

const express=require('express')
const app=express.Router()
var LocationSchema = require('../models/location')
let bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/getLocation', async (req, res) => {
    res.send("get Location")
})


app.get('/editLocation', async (req, res) => {
    res.send("Edit Location")
})

app.get('/deleteLocation', async (req, res) => {
    res.send("Delete Location")
})

app.post('/createLocation', async (req, res) => {
    console.log(req.body,"--body is here--")

    const location = new LocationSchema({
        locationName: req.body.locationName,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        locationType: req.body.locationType,
      });

      console.log(location,"--details are here00")

     location.save(err => {
          
             if(err) {

                let status = err.status || err.statusCode || err.code || 500;
        res.status(status).send({ status, error: err });

             }
                 res.send({ status: 200, response: "Location Create Successfully" });
      } )
})



app.delete('/deleteLocation', async (req, res) => {
    console.log(req.body,"--body is here--")

      console.log(location,"--details are here00")
      LocationSchema.deleteOne(req.body)
          if(err) {

        let status = err.status || err.statusCode || err.code || 500;
res.status(status).send({ status, error: err });

     }
         res.send({ status: 200, response: "Location Create Successfully" });


    })

module.exports = app;