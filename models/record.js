const mongoose = require('mongoose')

//Record Schema
let recordSchema = mongoose.Schema({
    applicant:{
        type: String,
        required: true
    },
    hours: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    sid: {
        type: Number,
        required: true
    }
})

let Article = module.exports = mongoose.model('Record', recordSchema)