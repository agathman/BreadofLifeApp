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

<<<<<<< HEAD

=======
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
>>>>>>> 790b58131e1b9eb015e02c61dcc392d2ed04aae9
