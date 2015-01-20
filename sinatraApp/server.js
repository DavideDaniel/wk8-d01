var express = require( 'express' );
var app = express();

app.get( '/', function ( req, res ) {
	res.send( {
		msg: "hello world"
	} );
} );

app.get( "/top_dvd", function ( req, res ) {
	var top_dvd = [ {
		"Jurrasic Park": 9
	}, {
		"Superman": 2
	}, {
		"Inception": 8
	} ]
	
	res.json( {results: top_dvd} )

} )

app.listen( 3000 );