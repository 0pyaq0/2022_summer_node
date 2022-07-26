var http = require('http');

http.createServer(function (request, response){
    // 쿠키 입력
    response.writeHead(200, {
        'Content-Type' : 'text/html',
        'Set-Cookie' : ['breakfast = toast', 'dinner = chicken']
    });
}).listen(4444, function() {
    console.log('4444번 포트에서 대기중...');
});