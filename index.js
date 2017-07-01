var d3 = require("d3");
/* Load the HTTP library */
var http = require("http");

/* Create an HTTP server to handle responses */
http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}).listen(8888);

// d3 
// add entry by any detail
// node backend call spotify API - search by
// album, artist, release date, recording date, producer


