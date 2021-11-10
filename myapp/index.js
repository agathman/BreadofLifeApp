const express = require('express')
const mongoose = require("mongoose");   //Requre mongoose library
const morgan = require("morgan");    //logging functionality
require("dotenv").config();   // Require the dotenv
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;

const app = express();


app.use(cors());

//import client model
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


app.use(express.json());
app.use(morgan("dev"));  //enable incoming request logging in dev mode

//Get all clients
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

//Find client by object id
app.get('/findClient/:id', (req, res, next) => {
    ClientModel.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else if (data === null) {
            res.status(404).send('Client not Found');
        }
        else {
          res.json(data)
        }
    })
});

//Delete client by object id
app.delete('/deleteClient/:id' , (req, res, next) => {
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

//Add client
app.post('/client', (req, res, next) => {

    ClientModel.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data);
        }
    })
});

//Update client by clientID
app.put('/client/:id', (req, res, next) => {
    ClientModel.findOneAndUpdate({ client_id: req.params.id }, {
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

//Get all clients attending a specified event by distribution id
app.get('/clientEvents/:id', (req, res, next) => {
   
    //Converting String parameter into required int/number
    var stringID = req.params.id
    var intID = parseInt(stringID);

    ClientModel.aggregate([
        { $match : { distribution_id : intID } },
        { $project : { _id : 0, fName : 1 , lName : 1  }}
            
    ], (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data);
        }
    });
});

// Find a distribution event by id
app.get('/distribution/:id', (req, res, next) => {
    var stringID = req.params.id
    var intID = parseInt(stringID);

    DistributionModel.findOne( { distribution_id : intID }, (error, data) => {
        if (error) {
            return next(error)
        } else if (data === null) {
          res.status(404).send('Student not found');
        }
        else {
          res.json(data)
        }
    });
});

//Delete distribution by object id
app.delete('/deleteDistribution/:id' , (req, res, next) => {
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

//Add distribution
app.post('/distribution', (req, res, next) => {

    DistributionModel.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

//Update distribution bu distribution_id
app.put('/distribution/:id', (req, res, next) => {
    DistributionModel.findOneAndUpdate({ distribution_id: req.params.id }, {
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

//Get all distribution events
app.get('/distributions',(req, res, next) => {
//very plain way to get all the data from the collection through the mongoose schema
    DistributionModel.find((error,data) => {
        if (error) {
//here we are using a call to next() to send an error message back
        return next(error)
        } 
        else {
            res.json(data)
        }
    })
});

//Find all events a client has attended
app.get('/client-access/:id', (req, res, next) => {

    var stringID = req.params.id;
    var intID = parseInt(stringID);

    ClientModel.aggregate([
        {$match: { client_id : intID } },
        { $project : {_id: 0, fName: 1, lName: 1, phoneNumber: 1, distribution_id: 1} },
         { $lookup : {
            from : 'distribution',
            localField : 'distribution_id',
            foreignField : 'distribution_id',
            as : 'distributions'
        } }
    ], (error, data) => {
        if (error) {
          return next(error)
        } else {
          res.json(data);
        }
    });
});


//Retrieves the zip code of the clients participating in an event/distributor
app.get('/clientLocale/:id', (req, res, next) => {
   
    //Converting String parameter into required int/number
    var stringID = req.params.id
    var intID = parseInt(stringID);

    ClientModel.aggregate([
        { $match : { distribution_id : intID } },
        { $project : { _id : 0, zip : 1 }}
            
    ], (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data);
        }
    });
});

//Find distribution by zipcode
app.get('/distributionZip/:id', (req, res, next) => {
   
    //Converting String parameter into required int/number
    var stringID = req.params.id
    var intID = parseInt(stringID);

    ClientModel.aggregate([
        { $match : { zip : intID } },
        { $project : { _id : 0, zip : 1, distribution_id: 1, client_id: 1 }},
        { $lookup : {
            from : 'distribution',
            localField : 'distribution_id',
            foreignField : 'distribution_id',
            as : 'distributions'
        } }
            
    ], (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data);
        }
    });
});

app.get('/distSelections', (req, res, next) => {
    DistributionModel.find({  }, (error, data) => {
        if (error) {
          return next(error)
        } else {
          res.json(data);
        }
    });
  });

//Listen to port
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

