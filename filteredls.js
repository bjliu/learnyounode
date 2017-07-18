var mymodule = require('./mymodule');
var callback = function (err, data) {
	if (err)
		return err
	for (var i = 0; i < data.length; i++){
		console.log(data[i]);
	}
};
mymodule(process.argv[2], process.argv[3], callback);