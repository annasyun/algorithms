// //forEach문
// function solution(strlist) {
//     var answer = [];
//     strlist.forEach(i => answer.push(i.length));
//     return answer;
// }

// for of문
// function solution(strlist) {
//     var answer = [];
//     for(let i of strlist){
//         answer.push(i.length)
//     }
//     return answer;
// }

// function solution(strlist) {
//     let answer = strlist.map(function(x){
//         return x.length})
//     return answer;
// }

function solution(strlist) {
    return strlist.map((x) => x.length)
}