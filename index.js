const express = require("express");
const bodyparser = require("body-parser");
const dotenv = require('dotenv');
dotenv.config();

var db = require("./database");

const index = require('./src/routes/index')
const weatherRoute = require('./src/routes/weather.routes')

const ENV = process.env.NODE_ENV;
const PORT = process.env.PORT || 4000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(bodyparser.json());


const corsMiddleWare = require("cors");
app.use(corsMiddleWare());


app.use(index)
app.use("/api/", weatherRoute)


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}!`);
});

  
