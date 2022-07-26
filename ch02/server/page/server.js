var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function(req, res){
    var pathname = url.parse(req.url).pathname; // url 변수 선언
    if(pathname == '/') {
        fs.readFile('index.html', function(err, data){
            // 응답
            res.writeHead(200, {'Content-Type' : 'text/html'});
            res.end(data);
        });
    }
    else if(pathname == '/other'){
        fs.readFile('other.html', function(err, data){
            res.writeHead(200, {'Content-Type' : 'text/html'});
            res.end(data);
        });
    }
}).listen(4444, () => {
    console.log('포트 4444 서버 대기중...');
});