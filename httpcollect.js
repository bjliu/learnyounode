var http = require('http');
var bl = require('bl');

http.get(process.argv[2], function (response) {
	response.pipe(bl(function(err, data) {
		var string = data.toString();
		console.log(string.length);
		console.log(string);
	}))
});