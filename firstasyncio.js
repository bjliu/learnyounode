var fs = require('fs');
var lines = fs.readFile(process.argv[2], function callback (err, data) {
	console.log(data.toString().split('\n').length - 1);
});