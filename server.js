const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Band = require('./app/models/band').band;
const Member = require('./app/models/band').member;

mongoose.connect('mongodb://localhost:27017/bands', {useNewUrlParser: true});

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

const port = process.env.PORT || 8080;

const router = express.Router();

//middleware
router.use(function(req,res,next){
  console.log("something is happening");
  next();
})

router.get('/',function(req,res){
  res.json({
    message:"welcome to the best api"
  })
})

 //routes for api
 router.route('/bands')

 .post(function(req, res) {
   var band = new Band()
   band.name = req.body.name
   // band.members = req.body.members
   band.save(function(err) {
     if (err)
      res.send(err)
    res.json({
      message: "band created"
    })
    })
 })

.get(function(req, res) {
  Band.find(function(err, bands) {
    if (err)
      res.send(err)
    res.json(bands)
  })
})

router.route('/bands/:band_id')

.get(function(req, res) {
  Band.findById(req.params.band_id, function(err, band) {
    if (err)
      res.send(err)
    res.json(band)
  })
})
 .put(function(req, res) {
   Band.findById(req.params.band_id, function(err, band) {
     if (err)
       res.send(err)
    band.name = req.body.name

    band.save(function(err) {
      if (err)
        res.send(err)
      res.json({
        message: "band updated"
    })
   })
 })
})
  .delete(function(req, res) {
    Band.remove({
      _id:req.params.band_id},
      function(err, band) {
      if (err)
        res.send(err)
      res.json({
        message: "band deleted"
      })
    })
  })

router.route('/bands/:band_id/members')

  .post(function(req, res) {
    Band.findById(req.params.band_id, function(err, band) {
      var member = new Member()
      member.band = band._id
        member.name = req.body.name

        band.members.push(member);

        band.save(function(err) {
          if (err)
            res.send(err)
          })
        member.save(function(err) {
          if (err)
            res.send(err)
            res.json({
              message: "Member Created/Band updated"
        })
    })
  })
} )
app.use('/api', router)

app.listen(port)
console.log('Magic happens on port' + port)
