const express = require('express');
const app = express();
require('dotenv').config({path:'./config.env'});
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const user = require('./models/User');

app.use(express.json());


const port = process.env.PORT || 3000

app.listen(port,function(){
    console.log('le port est ', port);
})