const express = require('express');
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
    process.env.MONGODB_URI || 'mongodb://localhost/workout',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }
);

require('./controllers/api/workout-routes')(app);
require('./controllers/html-routes')(app);

app.listen(PORT, () => {
    console.log(`App running at http://localhost:${PORT}`);
});

