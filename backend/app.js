const express = require("express");
const dotenv = require("dotenv");

dotenv.config({path: ".env"});


const app = express();

let port = process.env.PORT;
console.log(port, ": port");
app.set('port', port);


module.exports = app;
