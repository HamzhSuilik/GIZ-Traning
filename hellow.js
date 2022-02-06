// require = import
let http = require("http");
// createServer method tack function as parameter
http.createServer(function (req ,res){
    res.writeHead(200,{'Content-Type' : 'text/html'});
    res.end('Hellow VVV');
    res.write('hbjn')
}).listen(8080);