var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function(req, res){
    var pathname = url.parse(req.url).pathname; // url 변수 선언
    if(pathname == '/') {
        fs.readFile('ch03/page/web.html', function(err, data){
            // 응답
            res.writeHead(200, {'Content-Type' : 'text/html'});
            res.end(data);
        });
    }
    else if(pathname == '/css'){
        fs.readFile('ch03/page/css.html', function(err, data){
            res.writeHead(200, {'Content-Type' : 'text/html'});
            res.end(data);
        });
    }
    else if(pathname == '/Js'){
        fs.readFile('ch03/page/Js.html', function(err, data){
            res.writeHead(200, {'Content-Type' : 'text/html'});
            res.end(data);
        });
    }
}).listen(4444, () => {
    console.log('포트 4444 서버 대기중...');
});