const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BandSchema = new Schema({
  name: String,
  members:[{ type: Schema.Types.ObjectId, ref: 'Member' }]
})

const MemberSchema = new Schema({
  name: String,
  band: {
    type: Schema.Types.ObjectId,
    ref: 'Band'
  }
})

module.exports = {
  band: mongoose.model('Band', BandSchema),
  member: mongoose.model('Member', MemberSchema)
}
