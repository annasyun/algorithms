// function solution(array) {
//     let answer = 0;
//     array.sort((a,b) => a-b);
//     let index = array[((array.length)/2).toFixed()-1];
//     console.log(index);
//     answer = index;
//     return answer;
// }

function solution(array) {
    let answer = 0;
    array.sort((a,b) => a-b);
    let index = array[Math.floor((array.length)/2)];
    console.log(index);
    answer = index;
    return answer;
}