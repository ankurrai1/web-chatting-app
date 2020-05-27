const express = require("express");
const dotenv = require("dotenv");

dotenv.config({path: ".env"});


const app = express();

let port = process.env.PORT;
app.set('port', port);


module.exports = app;
