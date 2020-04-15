//문제 출처 : https://www.acmicpc.net/problem/15953

// readline 모듈 가져오기
const readline = require('readline');
// 변수 rl에 std 입출력 가져오기
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 변수 선언
let Input = []; // Input으로 입력을 일렬로 받아옴
let T; // Input[0]을 제이지의 생각횟수 T로 받아올것이고 없앨거임

// 두 콘테스트의 등수를 입력하면 받을 상금을 Return함 _a=2017년도 등수, _b=2018년도 등수
function Make_Result(_a,_b)
{
    // Reward_a,Reward_b는 각각 년도에 받을 수 있는 상금임
    let Reward_a, Reward_b;
    if(_a == 0){Reward_a =0;}
    else if(_a == 1){Reward_a = 500;}
    else if((1< _a) && (_a <= 3)){Reward_a = 300;}
    else if((3< _a) && (_a <= 6)){Reward_a = 200;}
    else if((6< _a) && (_a <= 10)){Reward_a = 50;}
    else if((10< _a) && (_a <= 15)){Reward_a = 30;}
    else if((15< _a) && (_a <= 21)){Reward_a = 10;}
    else{Reward_a = 0;}

    if(_b == 0){Reward_b =0;}
    else if(_b == 1){Reward_b = 512;}
    else if((1< _b) && (_b <= 3)){Reward_b = 256;}
    else if((3< _b) && (_b <= 7)){Reward_b = 128;}
    else if((7< _b) && (_b <= 15)){Reward_b = 64;}
    else if((15< _b) && (_b <= 31)){Reward_b = 32;}
    else{Reward_b = 0;}
    
    let sum = Reward_a + Reward_b;
    return sum*10000;
} 

// 정답을 출력함
function Print_Answer(_T)
{
    for(let i = 0; i < T; ++i)
    {
        // a에는 첫번째 콘테스트의 등수를
        // b에는 두번째 콘테스트의 등수를 대입
        let a = Input[i][0];
        let b = Input[i][1];
        let answer = Make_Result(a,b);
        console.log(answer);
    }
}

// Line이벤트 발생시 값을 value로 받아오고 문자열을 정수로 변환함
rl.on('line',function(value){
    Input.push(value.split(' ').map((element)=>parseInt(element)))
});

// Close이벤트 발생시 Process를 종료함
rl.on('close',function(){
    // 제이지가 상상한 횟수를 변수 T에 저장함.
    T = Input.shift();
    // 정답을 반환함.
    Print_Answer(T);
    process.exit();
})
