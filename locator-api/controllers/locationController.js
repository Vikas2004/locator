"use strict";

const express=require('express')
const app=express.Router()
var LocationSchema = require('../models/location')
let http = require('http');
let fs = require('fs');


// let bodyParser = require('body-parser');

// create application/json parser
// var jsonParser = bodyParser.json()
 
// // create application/x-www-form-urlencoded parser
// var urlencodedParser = bodyParser.urlencoded({ extended: false })


exports.about = (req, res) => {
    res.send("My Name is Vikas")
}
exports.show = (req, res) => {
    res.send("Deekshith")
}

exports.create = (req, res) => {
    console.log("cerate", req.url)
    const location = new LocationSchema({
        locationName: req.body.locationName,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        radius: 100,
      });
    location.save().then(res.send({messgae: "Location Created Successfully"}))
    .catch(e => { res.status(500).send({
        message: err.message || "Something wrong while retrieving locations."
    });})
}


exports.findAll = (req, res) => {
    console.log("--this should hit--")
    LocationSchema.find()
    .then(locations => {
        res.send({data: locations});
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong while retrieving locations."
        });
    });
}


exports.findOne = (req, res) => {
    console.log(req.params.locationId,"--location id is here--")
    LocationSchema.findById(req.params.locationId,"---cool")
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

exports.update = (req, res) => {
    if(!req.body) {
        return res.status(400).send({
            message: "Location content can not be empty"
        });
    }

    // Find and update Location with the request body
    LocationSchema.findByIdAndUpdate(req.params.locationId, {
        locationName : req.body.locationName,
        latitude: req.body.latitude,
        longitude: req.body.longitude
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
                message: "Location not found with id " + req.params.locationId
            });                
        }
        return res.status(500).send({
            message: "Something wrong updating note with id " + req.params.locationId
        });
    });
}


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
