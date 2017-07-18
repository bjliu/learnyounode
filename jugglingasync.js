var http = require('http');
var bl = require('bl');

http.get(process.argv[2], function (response) {
	response.pipe(bl(function(err, data) {
		var string1 = data.toString();
		http.get(process.argv[3], function (response) {
			response.pipe(bl(function(err, data) {
				var string2 = data.toString();
				http.get(process.argv[4], function (response) {
					response.pipe(bl(function(err, data) {
						var string3 = data.toString();
						console.log(string1);
						console.log(string2);
						console.log(string3);
					}))
				})
			}))
		})
	}))
});