"use strict";

var express = require('express')
var router = express.Router();

var locationController = require('../controllers/locationController')

//     // Home page route.
// router.use('/', locationController)
//  router.use('/', (req, res) => {
//      res.send("get location")
//  })

 router.use('/', locationController)
  // About page route.
//   router.get('/createLocation', locationController.createLocation)

//   router.get('/editLocation', locationController.editLocation)

//   router.get('/deleteLocation', locationController.deleteLocation)

                 

module.exports =  router ;