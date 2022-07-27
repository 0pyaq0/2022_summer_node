var http = require('http');
var fs = require('fs');
var ejs = require('ejs');

http.createServer(function (request, response){
    fs.readFile('ejsPage.ejs', 'utf-8', function(error, data) {
        response.writeHead(200, {'Content-Type' : 'text/html'});
        response.end(ejs.render(data));
    });
}).listen(4444, function() {
    console.log('4444번 포트에서 대기중...');
});