function solution(arr) {
    let answer = 0;
    const sum = arr.reduce((a,c)=>a+c,0)
    answer = sum/arr.length
    return answer;
}

