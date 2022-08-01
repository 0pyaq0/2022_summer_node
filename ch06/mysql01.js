var express = require('express');
var http = require('http')
var ejs = require('ejs')
var mysql = require('mysql')
var bodyParser = require('body-parser');
const { fstat } = require('fs');

var app = express();
app.set('port', process.env.PORT || 4444);
app.use(bodyParser.urlencoded({
    extended:false
}));

var server = http.createServer(app).listen(app.get('port'), function(){
    console.log('서버가 시작되었습니다');
});

// 데이터베이스 연동
var client = mysql.createConnection({
    user: 'root',
    password: '1111'
    database: 'company'
});

// 데이터 표시
app.get('/', function(req, res){
    fs.readFile('list.html', 'utf-8', function(err, data){
        client.query('SELECT * FROM products', function(err, results){
            res.send(ejs.render(data, {
                data: results
            }));
        });
    });
});