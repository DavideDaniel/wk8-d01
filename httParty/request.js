var request = require( 'request' );

var url = "http://api.randomuser.me";
var data;
request( url, function ( error, response, body ) {
		if ( !error && response.statusCode == 200 ) {
			data = JSON.parse( body )
			console.log(data);

			var user = data['results'][ 0 ][ 'user' ]
			console.log( user );
			console.log( data );
			var randomUser = {
				name: user.name.first + "" + user.name.last,
				email: user.email,
				dob: user.dob,
				phone: user.phone,
				SSN: user.SSN,
				imgLink: user.picture.medium
			}

		} 
})