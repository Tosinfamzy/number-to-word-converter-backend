require('dotenv').config()

const express = require('express');
const app = express();
const textRouter = require('./routes/route');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Load up the routes
app.use('/', textRouter);


const Port = process.env.PORT
app.listen(Port);
console.log(`Listening on port ${Port}`);

module.exports = app;