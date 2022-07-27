var http = require('http');
var fs = require('fs');
var ejs = require('ejs');

http.createServer(function (request, response){
    fs.readFile('ejsPage.ejs', 'utf-8', function(error, data) {
        response.writeHead(200, {'Content-Type' : 'text/html;charset=utf-8'});
        response.end(ejs.render(data, {
            name: 'funny_node.js',
            description: 'Hello ejs'
        }));
    });
}).listen(4444, function() {
    console.log('Server Running at http://127.0.0.1:4444');
});