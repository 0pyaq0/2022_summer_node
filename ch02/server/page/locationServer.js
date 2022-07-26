var http = require('http');

http.createServer(function(request, response){
    response.writeHead(302, {'Location' : 'https://www.e-mirim.hs.kr/main.do'});
    response.end();
}).listen(4444, () => {
    console.log('포트 4444 서버 대기중...');
});

