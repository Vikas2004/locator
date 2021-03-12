"use strict";

var express = require('express')
var router = express.Router();

var locationController = require('../controllers/locationController')

//     // Home page route.
// router.use('/', locationController)
//  router.use('/', (req, res) => {
//      res.send("get location")
//  })

 router.use('/location/', locationController.findAll)
  // About page route.
/   router.post('/location//createLocation', locationController.create)

  router.put('/location/:locationId', locationController.update)

   router.delete('/location/:locationId', locationController.delete)

                 

module.exports =  router ;