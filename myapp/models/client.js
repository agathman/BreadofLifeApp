const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let studentSchema = new Schema({
    //_id: Number,
    _id: { type: String, default: uuid.v1 },
    distribution_id: {
      type: Number,
      required: true
    },
    fName: {
      type: String,
      required: true
    },
    lName: {
        type: String,
        required: true
    },
    phoneNumber: {
      type: Number
    },
    Reference: {
      type: Number
    },
    zip: {
      type: Number
    },
    takeVaccine: {
      type: String,
      required: true
    },
    vaccinePreference: {
      type: String
    },
    vaccineReceived: {
      type: Number
    },
    additionalServices: {
      type: String
    },
    children: {
      type: Number
    },
    senior: {
      type: String
    },
    veteran: {
      type: String
    },
    ethnicity: {
      type: String
    }
  }, {
    collection: 'client'
});

module.exports = mongoose.model('client', projectdb)

//versionKey: false 



