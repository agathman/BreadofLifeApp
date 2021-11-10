const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let distributionSchema = new Schema({
    //_id: Number,
   // _id: { type: String, default: uuid.v1 
    //},
    distribution_id: {
      type: Number,
      required: true
    },
    reliefType: {
      type: String,
      required: true
    },
    reliefDate: {
      type: String,
    },
    location: {
      type: String,
      required: true
    },
    zip: {
      type: Number,
      required: true
    }
  }, {
    collection: 'distribution'
});

module.exports = mongoose.model('distribution', distributionSchema)

//versionKey: false 