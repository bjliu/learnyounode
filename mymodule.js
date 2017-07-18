var fs = require('fs');
var path = require('path');

module.exports = function (dir, ext, callback) {
	fs.readdir(dir, function (err, data) {
		if (err)
			return callback(err)
		// for (var i = 0; i < data.length; i++) {
		// 	var filename = data[i];
		// 	console.log(filename);
		// 	if (path.extname(filename).substring(1) != ext) {
		// 		data.splice(i, 1);
		// 	}
		// }
		var data = data.filter(function (filename) {
			return path.extname(filename).substring(1) === ext;
		})
		callback(null, data);
	});
}