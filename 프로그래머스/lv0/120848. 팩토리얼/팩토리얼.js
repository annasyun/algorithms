function solution(n) {
    let answer = -1;
    let sum =1;
    if(sum<=n){
        for(let i=1;sum<=n;i++){
            sum*=i
            answer++;
        }
    }
    return answer;
}