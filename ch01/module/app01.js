const {odd, even} = require('./module/module01.js');
function check(num){
    if(num%2){
        return odd;
    }
    return even;
}
console.log(check(30));