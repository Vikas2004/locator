const mongoose = require("mongoose")

const LocationSchema = new mongoose.Schema({
    id: {
        type: String, 
        required: true,
        unique: true,
        trim: true
    },
    locationName: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    latitude: {
        type: String,
        required: true,
        trim: true
    },
    longitude: {
        type: String,
        required: true,
        trim: true
    },
    locationType: {
        type: String,
        required: true,
        trim: true
    }

})

module.exports = mongoose.model("Location", LocationSchema)