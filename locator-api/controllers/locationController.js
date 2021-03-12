"use strict";

const express=require('express')
const app=express.Router()
var LocationSchema = require('../models/location')
let bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/createLocation', async (req, res) => {
    const location = new LocationSchema({
        locationName: req.body.locationName,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        locationType: req.body.locationType,
      });
     location.save(err => {
             if(err) {
                let status = err.status || err.statusCode || err.code || 500;
        res.status(status).send({ status, error: err });
             }
                 res.send({ status: 200, response: "Location Create Successfully" });
      } )
})



app.delete('/deleteLocation', async (req, res) => {
      LocationSchema.deleteOne(req.body)
          if(err) {
        let status = err.status || err.statusCode || err.code || 500;
res.status(status).send({ status, error: err });
     }
         res.send({ status: 200, response: "Location Create Successfully" });
    })

module.exports = app;