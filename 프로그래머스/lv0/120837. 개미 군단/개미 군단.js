// function solution(hp) {
//     let answer = 0;
//     let 장군개미수 = parseInt(hp / 5);
//     let 병정개미수 = parseInt((hp-장군개미수*5)/3);
//     let 일개미수= hp - 장군개미수*5 - 병정개미수*3 ;
//     answer = 장군개미수 + 병정개미수 + 일개미수 ;
//     return answer;
// }

function solution(hp) {
    let answer = 0;
    let 장군개미수 = Math.floor((hp / 5));
    let 병정개미수 = Math.floor(((hp-장군개미수*5)/3));
    let 일개미수= hp - 장군개미수*5 - 병정개미수*3 ;
    answer = 장군개미수 + 병정개미수 + 일개미수 ;
    return answer;
}