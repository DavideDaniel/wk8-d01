var express = require( 'express' );
var ejs = require( 'ejs' );
var fs = require( 'fs' );
var bodyParser = require( 'body-parser' );

var app = express();
app.use( bodyParser.urlencoded( {
	extended: true
} ) );

var musicActDB = [];

var file = "musicAct.JSON"
fs.readFile( file, function ( data ) {} )


var MusicAct = function ( name ) {
	this.name = name
	this.albums = {}
}

app.get( '/', function ( req, res ) {
	res.render( 'musicAct.ejs', {
		musicActDB: musicActDB
	} );
} );

app.post( '/add', function ( req, res ) {
	var musicAct = new MusicAct( req.body.name )

	musicActDB.push( musicAct );
	console.log( musicActDB );
	fs.writeFile( file, musicActDB, function () {} )
	res.render( {
		results: musicActDB
	
	} );

} )

app.listen( 3000 );

console.log( 'listening on port 3000!' );