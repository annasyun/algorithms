function solution(array) {
    let answer = 0;
    array.sort((a,b) => a-b);
    let index = array[((array.length)/2).toFixed()-1];
    answer = index;
    return answer;
}