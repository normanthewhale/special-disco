const Band = require( '../models/band' ).band
const Member = require( '../models/band' ).member

const message = require( '../utilities/response_message' )
module.exports = function ( router ) {

	router
		.route( '/bands' )
		// add band
		.post( function ( req, res ) {
			var band = new Band()
			band.name = req.body.name
			// band.members = req.body.members
			band.save( function ( err ) {
				message( err, res, "band created" )
			} )
		} )

		// see all bands
		.get( function ( req, res ) {
			Band.find( function ( err, bands ) {
				message( err, res, bands )
			} )
		} )

	// specific band route
	router
		.route( '/bands/:band_id' )
		// see specific band
		.get( function ( req, res ) {
			Band.findById( req.params.band_id, function ( err, band ) {
				message( err, res, band )
			} )
		} )

		// edit specific band name
		.put( function ( req, res ) {
			Band.findById( req.params.band_id, function ( err, band ) {
				if ( err ) 
					res.send( err )
				band.name = req
					.body
					.name
					band
					.save( function ( err ) {
						message( err, res, "band updated" )
					} )
			} )
		} )

		// delete specific band
		.delete( function ( req, res ) {
			Band.remove( {
				_id: req.params.band_id
			}, function ( err ) {
				message( err, res, "band deleted" )
			} )
		} )

	// see band members of a specific band
	router
		.route( '/bands/:band_id/members' )
		// add band member to a specific band
		.post( function ( req, res ) {
			Band.findById( {
				_id: req.params.band_id
			}, function ( err, band ) {
				const member = new Member()
				member.band = band
				member.name = req
					.body
					.name
					band
					.members
					.push( member );
				band.save( function ( err ) {
					if ( err ) 
						res.send( err )
				} )
				member.save( function ( err ) {
					message( err, res, "Member Created/Band updated" )
				} )
			} )
		} )
		//see a list of members to the specific band
		.get( function ( req, res ) {
			Band
				.findById( req.params.band_id, function ( err, band ) {
					if ( err ) 
						res.send( err )
						// res.json(band.members)
					
					//get more information about members in the band
				} )
				.populate( 'members', 'name' )
				.exec( function ( err, band ) {
					message( err, res, band.members )
				} )
		} )
}
