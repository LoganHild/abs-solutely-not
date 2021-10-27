const path = require('path');
const express = require('express');
const mongojs = require("mongojs");
// const routes = require('./controllers');

const app = express();

app.use(logger("dev"));

const PORT = process.env.PORT || 3001;



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


