var http = require('http');
var fs = require('fs');

http.createServer(function (request, response){

    if(request.method == 'GET') {
        fs.readFile('ch03/method/test.html', function(error, data) {
            // GET
            response.writeHead(200, {'Content-Type' : 'text/html'});
            response.end(data);
        });
    }
    else if(request.method == 'POST') {
        // POST
        request.on('data', function(data){
            response.writeHead(200, {'Content-Type' : 'text/html'});
            response.end('<h1>' + data + '</h1>');
        });
    }
}).listen(4444, function() {
    console.log('4444번 포트에서 대기중...');
});