// function solution(angle) {
//     let answer = 0;
//     if(angle===180){
//         answer = 4;
//     }else if(angle<180 && angle>90){
//         answer = 3;
//     }else if(angle===90){
//         answer = 2;
//     }else{
//         answer = 1;
//     }
//     return answer;
// }

function solution(angle) {
    return [0, 90, 91, 180].filter(x => angle>=x).length;
}
