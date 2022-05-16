const express = require('express')
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;

const app = express();
const port = 3000;

app.use(cors());

let projectDB;

let connectionString = 'mongodb://localhost:27017/projectdb'

MongoClient.connect (
    connectionString,
    { useNewUrlParser: true, useUnifiedTopology: true },
    function (err, client) {
        projectDB = client.db();
        app.listen(port, () => console.log('Listening on Port ${port}'));
    }
)

app.use(express.urlencoded({ extended: fasle}))

app.post('/client', (req, res) => {

    const client = req.body;

    console.log(client);
    
    projectDB.collection('client').insertOne(req.body, function (err, info) {
        console.log(err);
        console.log(info);
        res.send('Client is added to DB');
    });
});
