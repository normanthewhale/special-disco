const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;

const BandSchema = new Schema( {
	name: String,
	members: [ {
		type: Schema.Types.ObjectId,
		ref: 'Member'
	} ],
	albums: [],
	genre: String,
	origin: String,
	years_active: String
	rating: Number
} )

const MemberSchema = new Schema( {
	name: String,
	band: {
		type: Schema.Types.ObjectId,
		ref: 'Band'
	},
	origin: String,
	albums: [],
	instrument: String,
	genre: String,
	rating: Number
} )



module.exports = {
	band: mongoose.model( 'Band', BandSchema ),
	member: mongoose.model( 'Member', MemberSchema )
}
