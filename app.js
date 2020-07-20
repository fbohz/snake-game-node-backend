
const express = require('express');
const app = express();
const morgan = require('morgan');

// TODO insert routers here and import. E.g.
const scoreRoutes = require('./routes/scoreRoutes')

// TODO-2 insert baseUrl here. E.g.
const baseUrl = '/api/v1/scores';

// MIDDLEWARES
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));
// Data from body is added to the object (req.body)
app.use(express.json());
//serve static files from public folder access as e.g. /overview.html.
app.use(express.static(`${__dirname}/public`))

app.use((req, res, next) => {
  console.log('Hola from Express Middleware🧙🏾‍♂️');
  next();
});

// Example custom middleware:

// app.use((req, res, next) => {
//   // current time of request e.g.
//   req.requestTime = new Date().toISOString();
//   next();
// });

// Enable CORS
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

// MOUNT ROUTES

// TODO-3 implement middleware for router with baseUrl. E.g.
app.use(baseUrl, scoreRoutes);

module.exports = app