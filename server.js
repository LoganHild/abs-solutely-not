const express = require('express');
const mongojs = require("mongojs");
const mongoose = require("mongoose");
const logger = require("morgan");

require('dotenv').config();

const db = require("./models");

const app = express();

app.use(logger("dev"));

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

mongoose.connect(
    PROCESS.ENV.MONGODB_URI || 'mongodb://localhost/workout',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }
);

require('./routes/api-routes')(app);
require('./routes/html-ruotes')(app);

app.listen(PORT, () => {
    console.log(`App running at http://localhost:${PORT}`);
});

