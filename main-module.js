var http = require('http');
var dt = require ('./my-first-module');

http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write("Time : \n"+dt.myDateTime());
    res.end();
}).listen(8082);

