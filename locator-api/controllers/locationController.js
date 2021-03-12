"use strict";

const express=require('express')
const app=express.Router()
var LocationSchema = require('../models/location')
let bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



// app.post('/createLocation', async (req, res) => {
//     const location = new LocationSchema({
//         locationName: req.body.locationName,
//         latitude: req.body.latitude,
//         longitude: req.body.longitude,
//         radius: 100,
//       });
//      location.save(err => {
//              if(err) {
//                 let status = err.status || err.statusCode || err.code || 500;
//         res.status(status).send({ status, error: err });
//              }
//                  res.send({ status: 200, response: "Location Create Successfully" });
//       } )
// })

exports.create = (req, res) => {
    const location = new LocationSchema({
        locationName: req.body.locationName,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        radius: 100,
      });
     location.save(err => {
             if(err) {
                let status = err.status || err.statusCode || err.code || 500;
        res.status(status).send({ status, error: err });
             }
                 res.send({ status: 200, response: "Location Create Successfully" });
      } )
}

// List all the locations

// app.get('/', async(req,res) =>{
//     try{
//         const locations = await LocationSchema.find()
//         res.json(locations)
//     }
//     catch(err){
//         res.send('Error' + err)
//     }
// })

exports.findAll = (req, res) => {
    LocationSchema.find()
    .then(locations => {
        res.send(locations);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong while retrieving locations."
        });
    });
}

// Get the loaction by Id


exports.findOne = (req, res) => {
    LocationSchema.findById(req.params.locationId)
    .then(location => {
        if(!location) {
            return res.status(404).send({
                message: "Location not found with id " + req.params.locationId
            });            
        }
        res.send(location);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "location not found with id " + req.params.locationId
            });                
        }
        return res.status(500).send({
            message: "Something wrong retrieving location with id " + req.params.locationId
        });
    });
}

// app.get('/getLocation/:id', async(req, res) =>{
//     try{
//         const location = await LocationSchema.findById(req.params.id)
//         res.json(location)
//     }
//     catch(err){
//         res.send('Error' + err)
//     }
// })


// Update the location

exports.update = (req, res) => {
    if(!req.body) {
        return res.status(400).send({
            message: "Product content can not be empty"
        });
    }

    // Find and update product with the request body
    LocationSchema.findByIdAndUpdate(req.params.productId, {
        locationName : req.body.locationName,
    }, {new: true})
    .then(location => {
        if(!location) {
            return res.status(404).send({
                message: "LocationId not found with id " + req.params.locationId
            });
        }
        res.send(location);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Product not found with id " + req.params.locationId
            });                
        }
        return res.status(500).send({
            message: "Something wrong updating note with id " + req.params.locationId
        });
    });
}

// app.put('/editLocation/:id', async(req, res) =>{
//     const id = parseInt(req.params.id)
//     try{
//         const updateLocation = LocationSchema.updateOne({ _id: id},{
//             $set: {
//                 locationName : req.body.locationName,
//             }
            
//         })
//         res.json(updateLocation)
       
//     }
//     catch(err){
//         res.send('Error' + err)
//     }
// })


exports.delete = (req, res) => {
    LocationSchema.findByIdAndRemove(req.params.locationId)
    .then(location => {
        if(!location) {
            return res.status(404).send({
                message: "Location not found with id " + req.params.locationId
            });
        }
        res.send({message: "Location deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Location not found with id " + req.params.locationId
            });                
        }
        return res.status(500).send({
            message: "Could not delete Location with id " + req.params.locationId
        });
    });
}

// app.delete('/deleteLocation', async (req, res) => {
//       LocationSchema.deleteOne(req.body)
//           if(err) {
//         let status = err.status || err.statusCode || err.code || 500;
// res.status(status).send({ status, error: err });
//      }
//          res.send({ status: 200, response: "Location deleted Successfully" });
//     })


// module.exports = app;