const http = require('http');
const fs = require('fs');

http.createServer(function(req, res) {
    try{
      fs.readFile('ch02/server/index.html', function(err, data){
        res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
        res.end(data);
        });
    }
    catch(err){
        console.log(err);
        res.writeHead(500, {'Content-Type' : 'text/plain; charset=utf-8'});
        res.end(err);
    }
}).listen(4444, () => {
    console.log('포트 4444 서버 대기중...');
});