let { JsonDB, Config } = require( 'node-json-db');
const db = new JsonDB(new Config("db", true, false, '/'));
let express = require('express');
let app = express();
let ramDb = {};

app.get('/', function (req, res) {
    res.send('welcome to home page!');
});

 app.get('/about', async function (req, res) {

     await res.send('welcome to about page!');
});

app.listen(3000, function () {
    console.log('Example app listening on port 9000!');
});