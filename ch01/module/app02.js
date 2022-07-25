const {odd, even} = require('./module/module01.js');
function checkString(str){
    if(str.length%2){
        return odd;
    }
    return even;
}
console.log(checkString('hello'));