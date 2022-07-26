// process 객체
// 프로그램과 관련된 정보를 나타내는 객체

// 시간 측정 시작
console.time("mirim");
var output = 0;

for(var i = 1; i <= 100; i++){
    output += i;
}

// process.exit(); // 프로그램 종료
console.log("Result : ", output);

//시간 측정 종료
console.timeEnd("mirim");