module.exports = function messageResponse(err, res, msg) {
  if (err) res.send(err)
  if (typeof msg !== "string") {
    res.json(msg)
  } else {
    res.json({
      message: msg
    })
  }
}
