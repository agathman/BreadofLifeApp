const express = require('express')
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;

const app = express();
const port = 3000;

app.use(cors());

app.use(express.urlencoded({extended:false }));
app.use(express.json());

let projectDB;
let connectionString = 'mongodb://localhost:27017/projectdb'

MongoClient.connect (
    connectionString,
    { useNewUrlParser: true, useUnifiedTopology: true },
    function (err, client) {
        projectDB = client.db();
        app.listen(port, () => console.log('Listening on Port ${port}!'));
    }
);

app.get('/client', (req, res) => {
    projectDB.collection('client').find().toArray(function (err, items) {
        res.json(items);
    });
});

app.post('/client', (req, res) => {

    const client = req.body;

    console.log(client);
    
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