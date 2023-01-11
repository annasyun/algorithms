// function solution(num_list) {
//     var answer = [];
//     for(let i = num_list.length-1;i>=0;i--){
//         answer.push(num_list[i])
//     }
//     return answer;
// }

// function solution(num_list) {
//     let arr = [];
//     num_list.map((x) => arr.unshift(x));
//     return arr;
// }

function solution(num_list) {
    let arr = [];
    num_list.forEach((x) => arr.unshift(x));
    return arr;
}


// function solution(num_list) {
//     return num_list.reverse();
// }
