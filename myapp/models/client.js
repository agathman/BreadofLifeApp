const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let clientSchema = new Schema({
    //_id: Number,
   // _id: { type: String, default: uuid.v1 
    //},
    client_id: {
      type: Number,
      required: true
    },
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
      type: String
    },
    reference: {
      type: String
    },
    zip: {
      type: Number
    },
    takeVaccine: {
      type: Boolean,
      required: true
    },
    vaccinePreference: {
      type: String
    },
    vaccineReceived: {
      type: Boolean
    },
    additionalServices: {
      type: Boolean
    },
    children: {
      type: Number
    },
    senior: {
      type: Boolean
    },
    veteran: {
      type: Boolean
    },
    ethnicity: {
      type: String
    }
  }, {
    collection: 'client'
});

module.exports = mongoose.model('client', clientSchema)

//versionKey: false 



