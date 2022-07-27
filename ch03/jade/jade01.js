var http = require('http');
var fs = require('fs');
var jade = require('jade');

http.createServer(function (request, response){
    fs.readFile('JadePage.jade', 'utf-8', function(error, data) {
        // jade 모듈 사용
        var fn = jade.compile(data);

        // 출력
        response.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
        response.end(fn());
    });
}).listen(4444, function() {
    console.log('Server Running at http://127.0.0.1:4444');
});