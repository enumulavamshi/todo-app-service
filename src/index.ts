const express = require('express');
const bodyParser=require('body-parser');
const mongoose = require('mongoose');
const api = require('./api');

const app = express();

app.use(express.json());

app.listen(3000, (): void => {
    console.log(`Server Started at ${3000}`)
});

// Parses the text as url encoded data
app.use(bodyParser.urlencoded({extended: true}));
 
// Parses the text as json
app.use(bodyParser.json());
 
app.use('/api', api);