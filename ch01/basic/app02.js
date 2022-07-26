console.time("전체 시간");
console.log("hello");

var sum = 0;

for(i = 0; i < 10000; i++){
    sum += i;
}

console.timeEnd("전체 시간"); // console.time()가 리터널이 같아야 한다.