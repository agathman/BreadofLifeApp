const express = require('express')
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;

const app = express();
const port = 3000;

app.use(cors());

app.use(express.urlencoded({extended:false }));
app.use(express.json());

//DB var name
let projectDB;
//Connection string to DB
let connectionString = 'mongodb://localhost:27017/projectdb'

//Connecting to MongoDB
MongoClient.connect (
    connectionString,
    { useNewUrlParser: true, useUnifiedTopology: true },
    function (err, client) {
        projectDB = client.db();
        app.listen(port, () => console.log('Listening on Port ' + port ));
    }
);

//Viewing all documents in the client collection
app.get('/client', (req, res) => {
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
});