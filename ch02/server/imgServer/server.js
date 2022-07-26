var fs = require('fs');
var http = require('http');

http.createServer(function (request, response) {
    fs.readFile('ch02/server/imgServer/media/profile.png', function (error, data) {
        response.writeHead(200, {'Content-Type' : 'image/jpeg'});
        response.end(data);
    });
}).listen(4444, function() {
    console.log('4444번 포트에서 대기중...');
})