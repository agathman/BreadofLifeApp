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


//DB var name
/*let projectDB;
//Connection string to DB
let connectionString = 'mongodb://localhost:27017/projectdb';*/

//Connecting to MongoDB
/*MongoClient.connect (
    connectionString,
    { useNewUrlParser: true, useUnifiedTopology: true },
    function (err, client) {
        projectDB = client.db();
        app.listen(port, () => console.log('Listening on Port ' + port ));
    }
);*/

//Viewing all documents in the client collection
/*app.get('/client', (req, res) => {
    projectDB.collection('client').find().toArray(function (err, items) {
        res.json(items);
    });
});

//Adding a client to the collection
app.post('/client', (req, res) => {

    const newClient = req.body;

    console.log(newClient);
    
        projectDB.collection('client').insertOne(req.body, function (err, info) {
        console.log(err);
        console.log(info);
        res.send('Client is added to DB');
    });
});

//Deleting a client from the collection
app.delete('/client/:id', (req, res) => {
    // Reading id from the URL
    const id = req.params.id;

    // Remove item student ID
    projectDB.collection('client').deleteOne(
        { id: id }, //mongodb query
        function () { //calback
            res.send('Successfully deleted!') //response
        }
    )
});

//Viewing all documents in the distribution collection
app.get('/distribution', (req, res) => {
    projectDB.collection('distribution').find().toArray(function (err, items) {
        res.json(items);
    });
});

//Adding a distribution to the collection
app.post('/distribution', (req, res) => {

    const distribution = req.body;

    console.log(distribution);
    
        projectDB.collection('distribution').insertOne(req.body, function (err, info) {
        console.log(err);
        console.log(info);
        res.send('Distribution is added to DB');
    });
});

//Deleting a distribution from the collection
app.delete('/distribution/:id', (req, res) => {
    // Reading id from the URL
    const id = req.params.id;

    // Remove item student ID
    projectDB.collection('distribution').deleteOne(
        { id: id }, //mongodb query
        function () { //calback
            res.send('Successfully deleted!') //response
        }
    )
});*/

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