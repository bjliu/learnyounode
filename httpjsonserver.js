/**
 Write an HTTP server that serves JSON data when it receives a GET request
  to the path '/api/parsetime'. Expect the request to contain a query string
  with a key 'iso' and an ISO-format time as the value.

  For example:

  /api/parsetime?iso=2013-08-10T12:10:15.474Z

  The JSON response should contain only 'hour', 'minute' and 'second'
  properties. For example:

     {
       "hour": 14,
       "minute": 23,
       "second": 15
     }

  Add second endpoint for the path '/api/unixtime' which accepts the same
  query string but returns UNIX epoch time in milliseconds (the number of
  milliseconds since 1 Jan 1970 00:00:00 UTC) under the property 'unixtime'.
  For example:

     { "unixtime": 1376136615474 }

  Your server should listen on the port provided by the first argument to
  your program.
**/

var url = require('url');
var http = require('http');

var server = http.createServer(function(req, res) {
	var content = url.parse(req.url, true);
	var date = new Date(content.query.iso);
	var response = {};
	if (content.pathname === "/api/parsetime") {
		response["hour"] = date.getHours();
		response["minute"] = date.getMinutes();
		response["second"] = date.getSeconds();
	} else if (content.pathname === "/api/unixtime") {
		response["unixtime"] = date.getTime();
	}
	res.writeHead(200, { 'Content-Type': 'application/json' });
	res.end(JSON.stringify(response));
})
server.listen(process.argv[2])