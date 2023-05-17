function solution(num) {
    let answer = "Even";
    if(Math.abs(num%2)===1){
        answer = "Odd";
    }
    return answer;
}

