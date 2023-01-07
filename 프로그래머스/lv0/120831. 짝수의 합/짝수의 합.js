function solution(n) {
    let sum = 0;
    for(let i = 0;2*i<=n;i++){
        sum += 2*i;
    }
    return sum;
}