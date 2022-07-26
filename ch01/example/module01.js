exports.circleArea = function(num){
    return num * num * Math.PI;
}

// 절댓값을 구한다.
exports.abs = function(num){
    if(num > 0)
    return num;
    else return -num;
}

module.exports = {abs, circleArea};