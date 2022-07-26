const fs = require('fs');
console.log('시작');

let data = fs.readFileSync('./sam.txt');
console.log('1번', data.toString());
data = fs.readFileSync('./sam.txt');
console.log('2번', data.toString());
data = fs.readFileSync('./sam.txt');
console.log('3번', data.toString());
console.log('끝');


// 비동기식 파일 읽기
const fs = require('fs');
console.log('시작');

fs.readFileSync('./sam.txt', (err, data) => {
    if(err){
        throw err;
    }
    console.log('1번', data.toString());
});
fs.readFileSync('./sam.txt', (err, data) => {
    if(err){
        throw err;
    }
    console.log('2번', data.toString());
});
fs.readFileSync('./sam.txt', (err, data) => {
    if(err){
        throw err;
    }
    console.log('3번', data.toString());
});
console.log('끝');