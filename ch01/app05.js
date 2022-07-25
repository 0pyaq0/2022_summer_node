if(1){
    var x = 10;
}
console.log(x);

if(1){
    const y = 20;
}
console.log(y); // 범위를 벗어나 에러


var x = 10;
console.log(x);

const y = 100; // 값 바꾸기 X
console.log(y);

let z = 1000;
z = 10; // 값 바꾸기 O
console.log(z);