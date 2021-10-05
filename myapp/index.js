const express = require('express')
const mongoose = require("mongoose");   //Requre mongoose library
const morgan = require("morgan");    //logging functionality
require("dotenv").config();   // Require the dotenv
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;

const app = express();
const port = 3000;


app.use(cors());

//inport client model
let ClientModel = require('./models/client');

let DistributionModel = require('./models/distribution');

mongoose
  .connect(process.env.MONGO_URL)   // read environment varibale from .env
  .then(() => {
    console.log("Database connection Success!");
  })
  .catch((err) => {
    console.error("Mongo Connection Error", err);
  });

const PORT = process.env.PORT || 3000;


app.use(express.urlencoded({extended:false }));
app.use(express.json());
app.use(morgan("dev"));  //enable incoming request logging in dev mode

app.get('/clients', (req, res, next) => {
    //very plain way to get all the data from the collection through the mongoose schema
    ClientModel.find((error, data) => {
        if (error) {
          //here we are using a call to next() to send an error message back
          return next(error)
        } else {
          res.json(data)
        }
      })
});

app.delete('/client/:id' , (req, res, next) => {
    ClientModel.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
});

app.post('client', (req, res, next) => {

    StudentModel.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(date)
            res.send('Client is added to database');
        }
    })
})

app.put('/client/:id', (req, res, next) => {
    StudentModel.findOneAndUpdate({ clientID: req.params.id }, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.send('Client is edited via put');
            console.log('Client updated', data)
    }
    })
});

app.get('/distribution', (req, res, next) => {
    //very plain way to get all the data from the collection through the mongoose schema
    ClientModel.find((error, data) => {
        if (error) {
          //here we are using a call to next() to send an error message back
          return next(error)
        } else {
          res.json(data)
        }
      })
});

app.delete('/distribution/:id' , (req, res, next) => {
    DistributionModel.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
});

app.post('distribution', (req, res, next) => {

    StudentModel.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(date)
            res.send('Distribution is added to database');
        }
    })
})

app.put('/distribution/:id', (req, res, next) => {
    StudentModel.findOneAndUpdate({ distributionID: req.params.id }, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.send('Distribution is edited via put');
            console.log('Distribution updated', data)
    }
    })
});

// endpoint for retrieving client by _ID
app.get('/findclient/:id', (req, res, next) => {
    console.log(req.params.id)

    ClientModel.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else if (data === null) {
            // Sending 404 when not found something is a good practice
          res.status(404).send('Client not found');
        }
        else {
          res.json(data)
        }
    });
});


app.get('/client-access/:id', (req, res, next) => {
    ClientModel.aggregate([
        { $match : { _id : req.params.id } },
        { $project : {distribution_id: 1, fName: 1, lName: 1, phoneNumber: 1, zip: 1,
         takeVaccine: 1} },
         { $lookup : {
            from : 'distribution',
            localField : 'distribution_id',
            foreignField : 'distribution_id',
            as : 'distribution'
        } }
    ], (error, data) => {
        if (error) {
          return next(error)
        } else {
          res.json(data);
        }
    });
});


app.listen(PORT, () => {
    console.log("Server started listening on port : ", PORT);
  });

  // error handler
app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) 
        err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});