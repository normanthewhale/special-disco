const Band = require('../models/band').band
const Member = require('../models/band').member

const message = require('../utilities/response_message')

module.exports = function(router) {
  router.route('/members')
    //get a list of all members of all bands
    .get(function(req, res) {
      Member.find(function(err, members) {
        message(err, res, member)
      })
    })
  //route to the specific member
  router.route('/members/:member_id')
    //edit specific member
    .put(function(req, res) {
      Member.findById(req.params.member_id, function(err, member) {
        if (err)
          res.send(err)
        //assign name to the member
        member.name = req.body.name
        //save member information
        member.save(function(err) {
          if (err)
            res.send(err)
          res.json({
            message: "member updated"
          })
        })
      })
    })
  //add delete function for specific member
  // .delete(function(req, res) {
  //   // Band.findById(Member.band)
  //   Member.remove({
  //     _id:req.params.member_id
  //   }, function(err, member) {
  //     if (err)
  //       res.send(err)
  //     console.log(member)
  //     res.json ({
  //       message: "member deleted"
  //     })
  //   })
  // })
  //Delete a member from a band.
  router.route('/delete/:band_id/:member_id')
    .delete(function(req, res) {
      // Member.findById(req.params.member_id, function(err, member){
      //   console.log(member._id)
      // })
      Band.findById(req.params.band_id, function(err, band) {
        for (let i = 0; i < band.members.length; i++) {
          if (band.members[i] == req.params.member_id) {
            band.members.splice(i, 1)
            console.log(band.members)
          }
        }
        band.save(function(err) {
          if (err)
            res.send(err)
        })
      })
      Member.remove({
        _id: req.params.member_id
      }, function(err) {
        if (err)
          res.send(err)
        res.json({
          message: "member deleted/band members updated"
        })
      })
    })
}
