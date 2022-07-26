var http = require('http');

http.createServer(function (request, response){
    
    // 변수 선언
    var date = new Date();
    date.setDate(date.getDate() + 7);

    // 쿠키 입력
    response.writeHead(200, {
        'Content-Type' : 'text/html',
        'Set-Cookie' : ['breakfast = toast', 'dinner = chicken']
    });

    // 쿠키 출력
    response.end('<h1>' + request.headers.cookie + '</h1>');

}).listen(4444, function() {
    console.log('4444번 포트에서 대기중...');
});