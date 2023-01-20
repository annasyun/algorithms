function solution(my_string, n) {
    let arr = my_string.split("");
    let answer = [];
    for(i of arr){
        for(let j=0;j<n;j++){
        answer.push(i);        
        }
    }
    return answer.join("");
}