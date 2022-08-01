var mysql = require('mysql')

var client = mysql.createConnection({
    user: 'root',
    password: '1111'
    database: 'company'
});

client.query('SELECT * FROM products', function(error, results, fields){
    if(error){
        console.log('쿼리 문장에 오류가 있습니다.');
    } else {
        console.log(results);
    }
});