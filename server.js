// importing dependencies
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

mongoose.connect('mongodb://localhost:27017/bands', {
  useNewUrlParser: true
});

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use( express.static( path.join( __dirname, 'public' ) ) )
app.use(bodyParser.json());

const port = process.env.PORT || 8080;

const router = express.Router();

// middleware starts here
// function fired with every API call
router.use(function(req, res, next) {
  console.log("something is happening");
  next();
})

// catch all routes
router.get('/', function(req, res) {
  res.json({
    message: "welcome to the best api"
  })
})

//routes for api
// bands route
const bandRoutes = require('./app/routes/bands.js')
bandRoutes(router)
// members route
const memberRoutes = require('./app/routes/members.js')
memberRoutes(router)
//====================================
//end of middleware
app.use('/api', router)
//listen to port
app.listen(port)
//print out wht port you are on
console.log('Magic happens on port' + port)
